// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Supplychain extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Supplychain entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Supplychain must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Supplychain", id.toString(), this);
    }
  }

  static load(id: string): Supplychain | null {
    return changetype<Supplychain | null>(store.get("Supplychain", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operatorName(): string {
    let value = this.get("operatorName");
    return value!.toString();
  }

  set operatorName(value: string) {
    this.set("operatorName", Value.fromString(value));
  }

  get operatorMetadataStringified(): string {
    let value = this.get("operatorMetadataStringified");
    return value!.toString();
  }

  set operatorMetadataStringified(value: string) {
    this.set("operatorMetadataStringified", Value.fromString(value));
  }

  get operatorMetadata(): string | null {
    let value = this.get("operatorMetadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set operatorMetadata(value: string | null) {
    if (!value) {
      this.unset("operatorMetadata");
    } else {
      this.set("operatorMetadata", Value.fromString(<string>value));
    }
  }
}

export class SupplychainOperatorMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SupplychainOperatorMetadata entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SupplychainOperatorMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SupplychainOperatorMetadata", id.toString(), this);
    }
  }

  static load(id: string): SupplychainOperatorMetadata | null {
    return changetype<SupplychainOperatorMetadata | null>(
      store.get("SupplychainOperatorMetadata", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }

  get website(): string | null {
    let value = this.get("website");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set website(value: string | null) {
    if (!value) {
      this.unset("website");
    } else {
      this.set("website", Value.fromString(<string>value));
    }
  }

  get location(): string | null {
    let value = this.get("location");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set location(value: string | null) {
    if (!value) {
      this.unset("location");
    } else {
      this.set("location", Value.fromString(<string>value));
    }
  }
}

export class Product extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Product entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Product must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Product", id.toString(), this);
    }
  }

  static load(id: string): Product | null {
    return changetype<Product | null>(store.get("Product", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get metadataStringified(): string {
    let value = this.get("metadataStringified");
    return value!.toString();
  }

  set metadataStringified(value: string) {
    this.set("metadataStringified", Value.fromString(value));
  }

  get metadata(): string | null {
    let value = this.get("metadata");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metadata(value: string | null) {
    if (!value) {
      this.unset("metadata");
    } else {
      this.set("metadata", Value.fromString(<string>value));
    }
  }

  get supplychain(): string {
    let value = this.get("supplychain");
    return value!.toString();
  }

  set supplychain(value: string) {
    this.set("supplychain", Value.fromString(value));
  }
}

export class ProductMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProductMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ProductMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ProductMetadata", id.toString(), this);
    }
  }

  static load(id: string): ProductMetadata | null {
    return changetype<ProductMetadata | null>(store.get("ProductMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string | null {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (!value) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(<string>value));
    }
  }
}

export class Log extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Log entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Log must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Log", id.toString(), this);
    }
  }

  static load(id: string): Log | null {
    return changetype<Log | null>(store.get("Log", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): string {
    let value = this.get("timestamp");
    return value!.toString();
  }

  set timestamp(value: string) {
    this.set("timestamp", Value.fromString(value));
  }

  get product(): string {
    let value = this.get("product");
    return value!.toString();
  }

  set product(value: string) {
    this.set("product", Value.fromString(value));
  }

  get location(): string | null {
    let value = this.get("location");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set location(value: string | null) {
    if (!value) {
      this.unset("location");
    } else {
      this.set("location", Value.fromString(<string>value));
    }
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }
}
