import { near, log, ipfs, json } from "@graphprotocol/graph-ts";
import {
    Supplychain,
    SupplychainOperatorMetadata,
    Product,
    ProductMetadata,
    Log,
} from "../generated/schema";
import * as isIPFS from "is-ipfs";

export function handleReceipt(receipt: near.ReceiptWithOutcome): void {
    switch (receipt.receipt.receiverId.split(".").length) {
        // ProductTrace
        case 2: {
            // no functionalities defined yet
            break;
        }
        // Supplychain
        case 3: {
            receipt.receipt.actions.forEach((action) => {
                switch (action.kind) {
                    case near.ActionKind.FUNCTION_CALL: {
                        const functionCall = action.toFunctionCall();
                        switch (functionCall.methodName) {
                            case "new": {
                                let supplychain = Product.load(
                                    receipt.receipt.receiverId
                                );
                                if (supplychain == null) {
                                    handleCreateSupplychain(receipt);
                                }
                                break;
                            }
                            // case "FUNCTION_NAME": {break;}
                            // default: {break;}
                        }
                    }
                    // case near.ActionKind.DEPLOY_CONTRACT: {break;}
                    // default: {break;}
                }
            });
            break;
        }
        // Product
        case 4: {
            receipt.receipt.actions.forEach((action) => {
                switch (action.kind) {
                    case near.ActionKind.FUNCTION_CALL: {
                        const functionCall = action.toFunctionCall();
                        switch (functionCall.methodName) {
                            case "new": {
                                let product = Product.load(
                                    receipt.receipt.receiverId
                                );
                                if (product == null) {
                                    handleAddProduct(receipt);
                                }
                                break;
                            }
                            case "log_state": {
                                let product = Product.load(
                                    receipt.receipt.receiverId
                                );
                                if (product != null) {
                                    handleLogState(receipt);
                                }
                                break;
                            }
                            // case "FUNCTION_NAME": {break;}
                            // default: {break;}
                        }
                        break;
                    }
                    // case near.ActionKind.DEPLOY_CONTRACT: {break;}
                    // default: {break;}
                }
            });
            break;
        }
        // case 5: {break;}
        // default: {break;}
    }
}

function handleCreateSupplychain(receipt: near.ReceiptWithOutcome): void {
    const id = receipt.receipt.receiverId;
    const supplychain = new Supplychain(id);
    supplychain.operatorName = receipt.outcome.logs[0];
    const operatorMetadataStringified = receipt.outcome.logs[1];
    supplychain.operatorMetadataStringified = operatorMetadataStringified;
    if (isIPFS.cid(operatorMetadataStringified)) {
        let ipfsData = ipfs.cat(operatorMetadataStringified);
        if (ipfsData) {
            let object = json.fromBytes(ipfsData).toObject();
            if (object) {
                let metadata = new SupplychainOperatorMetadata(id);
                metadata.name = object.get("name")!.toString();
                metadata.description = object.get("description")!.toString();
                metadata.website = object.get("website")!.toString();
                metadata.location = object.get("location")!.toString();
                metadata.save();
                supplychain.operatorMetadata = id;
            }
        }
    }
    supplychain.save();
    log.info("Supplychain Created: {}", [id]);
}

function handleAddProduct(receipt: near.ReceiptWithOutcome): void {
    const id = receipt.receipt.receiverId;
    const metadataStringified = receipt.outcome.logs[1];
    const product = new Product(id);
    product.metadataStringified = metadataStringified;
    if (isIPFS.cid(metadataStringified)) {
        let ipfsData = ipfs.cat(metadataStringified);
        if (ipfsData) {
            let object = json.fromBytes(ipfsData).toObject();
            if (object) {
                let metadata = new ProductMetadata(id);
                metadata.name = object.get("name")!.toString();
                metadata.description = object.get("description")!.toString();
                metadata.save();
                product.metadata = id;
            }
        }
    }
    product.save();
    log.info("Product Added: {}", [product.id]);
}

function handleLogState(receipt: near.ReceiptWithOutcome): void {
    const content = receipt.outcome.logs[0];
    const logged_state = new Log(
        `${receipt.receipt.receiverId}${receipt.block.header.timestampNanosec}`
    );
    logged_state.content = content;
    logged_state.timestamp = receipt.block.header.timestampNanosec.toString();
    logged_state.product = receipt.receipt.receiverId;
    if (isIPFS.cid(content)) {
        let ipfsData = ipfs.cat(content);
        if (ipfsData) {
            let object = json.fromBytes(ipfsData).toObject();
            if (object) {
                logged_state.location = object.get("location")!.toString();
            }
        }
    }
    logged_state.save();
    log.info("Logged State for {}: ", [
        logged_state.product,
        logged_state.content,
    ]);
}
