
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Basket_items
 * 
 */
export type Basket_items = {
  /**
   * @zod.string.uuid()
   */
  id: string
  /**
   * @zod.string.uuid()
   */
  item_id: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  quantity: number
  created_at: Date
  /**
   * @zod.string.uuid()
   */
  order_id: string | null
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  purchased_price: number | null
}

/**
 * Model Items
 * 
 */
export type Items = {
  /**
   * @zod.string.uuid()
   */
  id: string
  slug: string
  name: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  price: number
  description: string
}

/**
 * Model Orders
 * 
 */
export type Orders = {
  /**
   * @zod.string.uuid()
   */
  id: string
  recipient_name: string
  delivery_address: string
  delivery_postcode: string
  delivery_country: string
  /**
   * @zod.number.int().gte(-2147483648).lte(2147483647)
   */
  delivery_price: number
  status: string
  created_at: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Basket_items
 * const basket_items = await prisma.basket_items.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Basket_items
   * const basket_items = await prisma.basket_items.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.basket_items`: Exposes CRUD operations for the **Basket_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Basket_items
    * const basket_items = await prisma.basket_items.findMany()
    * ```
    */
  get basket_items(): Prisma.Basket_itemsDelegate<GlobalReject>;

  /**
   * `prisma.items`: Exposes CRUD operations for the **Items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.items.findMany()
    * ```
    */
  get items(): Prisma.ItemsDelegate<GlobalReject>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
export type InputJsonValue = null | string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Basket_items: 'Basket_items',
    Items: 'Items',
    Orders: 'Orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemsCountOutputType
   */


  export type ItemsCountOutputType = {
    basket_items: number
  }

  export type ItemsCountOutputTypeSelect = {
    basket_items?: boolean | ItemsCountOutputTypeCountBasket_itemsArgs
  }

  export type ItemsCountOutputTypeGetPayload<S extends boolean | null | undefined | ItemsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ItemsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ItemsCountOutputTypeArgs)
    ? ItemsCountOutputType 
    : S extends { select: any } & (ItemsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ItemsCountOutputType ? ItemsCountOutputType[P] : never
  } 
      : ItemsCountOutputType




  // Custom InputTypes

  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ItemsCountOutputType
     * 
    **/
    select?: ItemsCountOutputTypeSelect | null
  }


  /**
   * ItemsCountOutputType without action
   */
  export type ItemsCountOutputTypeCountBasket_itemsArgs = {
    where?: Basket_itemsWhereInput
  }



  /**
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    basket_items: number
  }

  export type OrdersCountOutputTypeSelect = {
    basket_items?: boolean | OrdersCountOutputTypeCountBasket_itemsArgs
  }

  export type OrdersCountOutputTypeGetPayload<S extends boolean | null | undefined | OrdersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrdersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrdersCountOutputTypeArgs)
    ? OrdersCountOutputType 
    : S extends { select: any } & (OrdersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrdersCountOutputType ? OrdersCountOutputType[P] : never
  } 
      : OrdersCountOutputType




  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     * 
    **/
    select?: OrdersCountOutputTypeSelect | null
  }


  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountBasket_itemsArgs = {
    where?: Basket_itemsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Basket_items
   */


  export type AggregateBasket_items = {
    _count: Basket_itemsCountAggregateOutputType | null
    _avg: Basket_itemsAvgAggregateOutputType | null
    _sum: Basket_itemsSumAggregateOutputType | null
    _min: Basket_itemsMinAggregateOutputType | null
    _max: Basket_itemsMaxAggregateOutputType | null
  }

  export type Basket_itemsAvgAggregateOutputType = {
    quantity: number | null
    purchased_price: number | null
  }

  export type Basket_itemsSumAggregateOutputType = {
    quantity: number | null
    purchased_price: number | null
  }

  export type Basket_itemsMinAggregateOutputType = {
    id: string | null
    item_id: string | null
    quantity: number | null
    created_at: Date | null
    order_id: string | null
    purchased_price: number | null
  }

  export type Basket_itemsMaxAggregateOutputType = {
    id: string | null
    item_id: string | null
    quantity: number | null
    created_at: Date | null
    order_id: string | null
    purchased_price: number | null
  }

  export type Basket_itemsCountAggregateOutputType = {
    id: number
    item_id: number
    quantity: number
    created_at: number
    order_id: number
    purchased_price: number
    _all: number
  }


  export type Basket_itemsAvgAggregateInputType = {
    quantity?: true
    purchased_price?: true
  }

  export type Basket_itemsSumAggregateInputType = {
    quantity?: true
    purchased_price?: true
  }

  export type Basket_itemsMinAggregateInputType = {
    id?: true
    item_id?: true
    quantity?: true
    created_at?: true
    order_id?: true
    purchased_price?: true
  }

  export type Basket_itemsMaxAggregateInputType = {
    id?: true
    item_id?: true
    quantity?: true
    created_at?: true
    order_id?: true
    purchased_price?: true
  }

  export type Basket_itemsCountAggregateInputType = {
    id?: true
    item_id?: true
    quantity?: true
    created_at?: true
    order_id?: true
    purchased_price?: true
    _all?: true
  }

  export type Basket_itemsAggregateArgs = {
    /**
     * Filter which Basket_items to aggregate.
     * 
    **/
    where?: Basket_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basket_items to fetch.
     * 
    **/
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Basket_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basket_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basket_items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Basket_items
    **/
    _count?: true | Basket_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Basket_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Basket_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Basket_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Basket_itemsMaxAggregateInputType
  }

  export type GetBasket_itemsAggregateType<T extends Basket_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateBasket_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBasket_items[P]>
      : GetScalarType<T[P], AggregateBasket_items[P]>
  }




  export type Basket_itemsGroupByArgs = {
    where?: Basket_itemsWhereInput
    orderBy?: Enumerable<Basket_itemsOrderByWithAggregationInput>
    by: Array<Basket_itemsScalarFieldEnum>
    having?: Basket_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Basket_itemsCountAggregateInputType | true
    _avg?: Basket_itemsAvgAggregateInputType
    _sum?: Basket_itemsSumAggregateInputType
    _min?: Basket_itemsMinAggregateInputType
    _max?: Basket_itemsMaxAggregateInputType
  }


  export type Basket_itemsGroupByOutputType = {
    id: string
    item_id: string
    quantity: number
    created_at: Date
    order_id: string | null
    purchased_price: number | null
    _count: Basket_itemsCountAggregateOutputType | null
    _avg: Basket_itemsAvgAggregateOutputType | null
    _sum: Basket_itemsSumAggregateOutputType | null
    _min: Basket_itemsMinAggregateOutputType | null
    _max: Basket_itemsMaxAggregateOutputType | null
  }

  type GetBasket_itemsGroupByPayload<T extends Basket_itemsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Basket_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Basket_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Basket_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Basket_itemsGroupByOutputType[P]>
        }
      >
    >


  export type Basket_itemsSelect = {
    id?: boolean
    item_id?: boolean
    quantity?: boolean
    created_at?: boolean
    order_id?: boolean
    purchased_price?: boolean
    items?: boolean | ItemsArgs
    orders?: boolean | Basket_items$ordersArgs
  }


  export type Basket_itemsInclude = {
    items?: boolean | ItemsArgs
    orders?: boolean | Basket_items$ordersArgs
  } 

  export type Basket_itemsGetPayload<S extends boolean | null | undefined | Basket_itemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Basket_items :
    S extends undefined ? never :
    S extends { include: any } & (Basket_itemsArgs | Basket_itemsFindManyArgs)
    ? Basket_items  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'items' ? ItemsGetPayload<S['include'][P]> :
        P extends 'orders' ? OrdersGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (Basket_itemsArgs | Basket_itemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'items' ? ItemsGetPayload<S['select'][P]> :
        P extends 'orders' ? OrdersGetPayload<S['select'][P]> | null :  P extends keyof Basket_items ? Basket_items[P] : never
  } 
      : Basket_items


  type Basket_itemsCountArgs = Merge<
    Omit<Basket_itemsFindManyArgs, 'select' | 'include'> & {
      select?: Basket_itemsCountAggregateInputType | true
    }
  >

  export interface Basket_itemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Basket_items that matches the filter.
     * @param {Basket_itemsFindUniqueArgs} args - Arguments to find a Basket_items
     * @example
     * // Get one Basket_items
     * const basket_items = await prisma.basket_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Basket_itemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Basket_itemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Basket_items'> extends True ? Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>> : Prisma__Basket_itemsClient<Basket_itemsGetPayload<T> | null, null>

    /**
     * Find one Basket_items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Basket_itemsFindUniqueOrThrowArgs} args - Arguments to find a Basket_items
     * @example
     * // Get one Basket_items
     * const basket_items = await prisma.basket_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Basket_itemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Basket_itemsFindUniqueOrThrowArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Find the first Basket_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsFindFirstArgs} args - Arguments to find a Basket_items
     * @example
     * // Get one Basket_items
     * const basket_items = await prisma.basket_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Basket_itemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Basket_itemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Basket_items'> extends True ? Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>> : Prisma__Basket_itemsClient<Basket_itemsGetPayload<T> | null, null>

    /**
     * Find the first Basket_items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsFindFirstOrThrowArgs} args - Arguments to find a Basket_items
     * @example
     * // Get one Basket_items
     * const basket_items = await prisma.basket_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Basket_itemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Basket_itemsFindFirstOrThrowArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Find zero or more Basket_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Basket_items
     * const basket_items = await prisma.basket_items.findMany()
     * 
     * // Get first 10 Basket_items
     * const basket_items = await prisma.basket_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const basket_itemsWithIdOnly = await prisma.basket_items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Basket_itemsFindManyArgs>(
      args?: SelectSubset<T, Basket_itemsFindManyArgs>
    ): PrismaPromise<Array<Basket_itemsGetPayload<T>>>

    /**
     * Create a Basket_items.
     * @param {Basket_itemsCreateArgs} args - Arguments to create a Basket_items.
     * @example
     * // Create one Basket_items
     * const Basket_items = await prisma.basket_items.create({
     *   data: {
     *     // ... data to create a Basket_items
     *   }
     * })
     * 
    **/
    create<T extends Basket_itemsCreateArgs>(
      args: SelectSubset<T, Basket_itemsCreateArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Create many Basket_items.
     *     @param {Basket_itemsCreateManyArgs} args - Arguments to create many Basket_items.
     *     @example
     *     // Create many Basket_items
     *     const basket_items = await prisma.basket_items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Basket_itemsCreateManyArgs>(
      args?: SelectSubset<T, Basket_itemsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Basket_items.
     * @param {Basket_itemsDeleteArgs} args - Arguments to delete one Basket_items.
     * @example
     * // Delete one Basket_items
     * const Basket_items = await prisma.basket_items.delete({
     *   where: {
     *     // ... filter to delete one Basket_items
     *   }
     * })
     * 
    **/
    delete<T extends Basket_itemsDeleteArgs>(
      args: SelectSubset<T, Basket_itemsDeleteArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Update one Basket_items.
     * @param {Basket_itemsUpdateArgs} args - Arguments to update one Basket_items.
     * @example
     * // Update one Basket_items
     * const basket_items = await prisma.basket_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Basket_itemsUpdateArgs>(
      args: SelectSubset<T, Basket_itemsUpdateArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Delete zero or more Basket_items.
     * @param {Basket_itemsDeleteManyArgs} args - Arguments to filter Basket_items to delete.
     * @example
     * // Delete a few Basket_items
     * const { count } = await prisma.basket_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Basket_itemsDeleteManyArgs>(
      args?: SelectSubset<T, Basket_itemsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Basket_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Basket_items
     * const basket_items = await prisma.basket_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Basket_itemsUpdateManyArgs>(
      args: SelectSubset<T, Basket_itemsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Basket_items.
     * @param {Basket_itemsUpsertArgs} args - Arguments to update or create a Basket_items.
     * @example
     * // Update or create a Basket_items
     * const basket_items = await prisma.basket_items.upsert({
     *   create: {
     *     // ... data to create a Basket_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Basket_items we want to update
     *   }
     * })
    **/
    upsert<T extends Basket_itemsUpsertArgs>(
      args: SelectSubset<T, Basket_itemsUpsertArgs>
    ): Prisma__Basket_itemsClient<Basket_itemsGetPayload<T>>

    /**
     * Count the number of Basket_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsCountArgs} args - Arguments to filter Basket_items to count.
     * @example
     * // Count the number of Basket_items
     * const count = await prisma.basket_items.count({
     *   where: {
     *     // ... the filter for the Basket_items we want to count
     *   }
     * })
    **/
    count<T extends Basket_itemsCountArgs>(
      args?: Subset<T, Basket_itemsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Basket_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Basket_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Basket_itemsAggregateArgs>(args: Subset<T, Basket_itemsAggregateArgs>): PrismaPromise<GetBasket_itemsAggregateType<T>>

    /**
     * Group by Basket_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Basket_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Basket_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Basket_itemsGroupByArgs['orderBy'] }
        : { orderBy?: Basket_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Basket_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBasket_itemsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Basket_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Basket_itemsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    items<T extends ItemsArgs= {}>(args?: Subset<T, ItemsArgs>): Prisma__ItemsClient<ItemsGetPayload<T> | Null>;

    orders<T extends Basket_items$ordersArgs= {}>(args?: Subset<T, Basket_items$ordersArgs>): Prisma__OrdersClient<OrdersGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Basket_items base type for findUnique actions
   */
  export type Basket_itemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter, which Basket_items to fetch.
     * 
    **/
    where: Basket_itemsWhereUniqueInput
  }

  /**
   * Basket_items findUnique
   */
  export interface Basket_itemsFindUniqueArgs extends Basket_itemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Basket_items findUniqueOrThrow
   */
  export type Basket_itemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter, which Basket_items to fetch.
     * 
    **/
    where: Basket_itemsWhereUniqueInput
  }


  /**
   * Basket_items base type for findFirst actions
   */
  export type Basket_itemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter, which Basket_items to fetch.
     * 
    **/
    where?: Basket_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basket_items to fetch.
     * 
    **/
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Basket_items.
     * 
    **/
    cursor?: Basket_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basket_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basket_items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Basket_items.
     * 
    **/
    distinct?: Enumerable<Basket_itemsScalarFieldEnum>
  }

  /**
   * Basket_items findFirst
   */
  export interface Basket_itemsFindFirstArgs extends Basket_itemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Basket_items findFirstOrThrow
   */
  export type Basket_itemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter, which Basket_items to fetch.
     * 
    **/
    where?: Basket_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basket_items to fetch.
     * 
    **/
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Basket_items.
     * 
    **/
    cursor?: Basket_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basket_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basket_items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Basket_items.
     * 
    **/
    distinct?: Enumerable<Basket_itemsScalarFieldEnum>
  }


  /**
   * Basket_items findMany
   */
  export type Basket_itemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter, which Basket_items to fetch.
     * 
    **/
    where?: Basket_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Basket_items to fetch.
     * 
    **/
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Basket_items.
     * 
    **/
    cursor?: Basket_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Basket_items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Basket_items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Basket_itemsScalarFieldEnum>
  }


  /**
   * Basket_items create
   */
  export type Basket_itemsCreateArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * The data needed to create a Basket_items.
     * 
    **/
    data: XOR<Basket_itemsCreateInput, Basket_itemsUncheckedCreateInput>
  }


  /**
   * Basket_items createMany
   */
  export type Basket_itemsCreateManyArgs = {
    /**
     * The data used to create many Basket_items.
     * 
    **/
    data: Enumerable<Basket_itemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Basket_items update
   */
  export type Basket_itemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * The data needed to update a Basket_items.
     * 
    **/
    data: XOR<Basket_itemsUpdateInput, Basket_itemsUncheckedUpdateInput>
    /**
     * Choose, which Basket_items to update.
     * 
    **/
    where: Basket_itemsWhereUniqueInput
  }


  /**
   * Basket_items updateMany
   */
  export type Basket_itemsUpdateManyArgs = {
    /**
     * The data used to update Basket_items.
     * 
    **/
    data: XOR<Basket_itemsUpdateManyMutationInput, Basket_itemsUncheckedUpdateManyInput>
    /**
     * Filter which Basket_items to update
     * 
    **/
    where?: Basket_itemsWhereInput
  }


  /**
   * Basket_items upsert
   */
  export type Basket_itemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * The filter to search for the Basket_items to update in case it exists.
     * 
    **/
    where: Basket_itemsWhereUniqueInput
    /**
     * In case the Basket_items found by the `where` argument doesn't exist, create a new Basket_items with this data.
     * 
    **/
    create: XOR<Basket_itemsCreateInput, Basket_itemsUncheckedCreateInput>
    /**
     * In case the Basket_items was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Basket_itemsUpdateInput, Basket_itemsUncheckedUpdateInput>
  }


  /**
   * Basket_items delete
   */
  export type Basket_itemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    /**
     * Filter which Basket_items to delete.
     * 
    **/
    where: Basket_itemsWhereUniqueInput
  }


  /**
   * Basket_items deleteMany
   */
  export type Basket_itemsDeleteManyArgs = {
    /**
     * Filter which Basket_items to delete
     * 
    **/
    where?: Basket_itemsWhereInput
  }


  /**
   * Basket_items.orders
   */
  export type Basket_items$ordersArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    where?: OrdersWhereInput
  }


  /**
   * Basket_items without action
   */
  export type Basket_itemsArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
  }



  /**
   * Model Items
   */


  export type AggregateItems = {
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  export type ItemsAvgAggregateOutputType = {
    price: number | null
  }

  export type ItemsSumAggregateOutputType = {
    price: number | null
  }

  export type ItemsMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    price: number | null
    description: string | null
  }

  export type ItemsMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    price: number | null
    description: string | null
  }

  export type ItemsCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    price: number
    description: number
    _all: number
  }


  export type ItemsAvgAggregateInputType = {
    price?: true
  }

  export type ItemsSumAggregateInputType = {
    price?: true
  }

  export type ItemsMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    price?: true
    description?: true
  }

  export type ItemsMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    price?: true
    description?: true
  }

  export type ItemsCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    price?: true
    description?: true
    _all?: true
  }

  export type ItemsAggregateArgs = {
    /**
     * Filter which Items to aggregate.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemsMaxAggregateInputType
  }

  export type GetItemsAggregateType<T extends ItemsAggregateArgs> = {
        [P in keyof T & keyof AggregateItems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItems[P]>
      : GetScalarType<T[P], AggregateItems[P]>
  }




  export type ItemsGroupByArgs = {
    where?: ItemsWhereInput
    orderBy?: Enumerable<ItemsOrderByWithAggregationInput>
    by: Array<ItemsScalarFieldEnum>
    having?: ItemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemsCountAggregateInputType | true
    _avg?: ItemsAvgAggregateInputType
    _sum?: ItemsSumAggregateInputType
    _min?: ItemsMinAggregateInputType
    _max?: ItemsMaxAggregateInputType
  }


  export type ItemsGroupByOutputType = {
    id: string
    slug: string
    name: string
    price: number
    description: string
    _count: ItemsCountAggregateOutputType | null
    _avg: ItemsAvgAggregateOutputType | null
    _sum: ItemsSumAggregateOutputType | null
    _min: ItemsMinAggregateOutputType | null
    _max: ItemsMaxAggregateOutputType | null
  }

  type GetItemsGroupByPayload<T extends ItemsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ItemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemsGroupByOutputType[P]>
            : GetScalarType<T[P], ItemsGroupByOutputType[P]>
        }
      >
    >


  export type ItemsSelect = {
    id?: boolean
    slug?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    basket_items?: boolean | Items$basket_itemsArgs
    _count?: boolean | ItemsCountOutputTypeArgs
  }


  export type ItemsInclude = {
    basket_items?: boolean | Items$basket_itemsArgs
    _count?: boolean | ItemsCountOutputTypeArgs
  } 

  export type ItemsGetPayload<S extends boolean | null | undefined | ItemsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Items :
    S extends undefined ? never :
    S extends { include: any } & (ItemsArgs | ItemsFindManyArgs)
    ? Items  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'basket_items' ? Array < Basket_itemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ItemsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ItemsArgs | ItemsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'basket_items' ? Array < Basket_itemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ItemsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Items ? Items[P] : never
  } 
      : Items


  type ItemsCountArgs = Merge<
    Omit<ItemsFindManyArgs, 'select' | 'include'> & {
      select?: ItemsCountAggregateInputType | true
    }
  >

  export interface ItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Items that matches the filter.
     * @param {ItemsFindUniqueArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ItemsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find one Items that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemsFindUniqueOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindUniqueOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find the first Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ItemsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Items'> extends True ? Prisma__ItemsClient<ItemsGetPayload<T>> : Prisma__ItemsClient<ItemsGetPayload<T> | null, null>

    /**
     * Find the first Items that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindFirstOrThrowArgs} args - Arguments to find a Items
     * @example
     * // Get one Items
     * const items = await prisma.items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ItemsFindFirstOrThrowArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.items.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemsWithIdOnly = await prisma.items.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemsFindManyArgs>(
      args?: SelectSubset<T, ItemsFindManyArgs>
    ): PrismaPromise<Array<ItemsGetPayload<T>>>

    /**
     * Create a Items.
     * @param {ItemsCreateArgs} args - Arguments to create a Items.
     * @example
     * // Create one Items
     * const Items = await prisma.items.create({
     *   data: {
     *     // ... data to create a Items
     *   }
     * })
     * 
    **/
    create<T extends ItemsCreateArgs>(
      args: SelectSubset<T, ItemsCreateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Create many Items.
     *     @param {ItemsCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const items = await prisma.items.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemsCreateManyArgs>(
      args?: SelectSubset<T, ItemsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Items.
     * @param {ItemsDeleteArgs} args - Arguments to delete one Items.
     * @example
     * // Delete one Items
     * const Items = await prisma.items.delete({
     *   where: {
     *     // ... filter to delete one Items
     *   }
     * })
     * 
    **/
    delete<T extends ItemsDeleteArgs>(
      args: SelectSubset<T, ItemsDeleteArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Update one Items.
     * @param {ItemsUpdateArgs} args - Arguments to update one Items.
     * @example
     * // Update one Items
     * const items = await prisma.items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemsUpdateArgs>(
      args: SelectSubset<T, ItemsUpdateArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Delete zero or more Items.
     * @param {ItemsDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemsDeleteManyArgs>(
      args?: SelectSubset<T, ItemsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const items = await prisma.items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemsUpdateManyArgs>(
      args: SelectSubset<T, ItemsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Items.
     * @param {ItemsUpsertArgs} args - Arguments to update or create a Items.
     * @example
     * // Update or create a Items
     * const items = await prisma.items.upsert({
     *   create: {
     *     // ... data to create a Items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Items we want to update
     *   }
     * })
    **/
    upsert<T extends ItemsUpsertArgs>(
      args: SelectSubset<T, ItemsUpsertArgs>
    ): Prisma__ItemsClient<ItemsGetPayload<T>>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.items.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemsCountArgs>(
      args?: Subset<T, ItemsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemsAggregateArgs>(args: Subset<T, ItemsAggregateArgs>): PrismaPromise<GetItemsAggregateType<T>>

    /**
     * Group by Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemsGroupByArgs['orderBy'] }
        : { orderBy?: ItemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ItemsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_items<T extends Items$basket_itemsArgs= {}>(args?: Subset<T, Items$basket_itemsArgs>): PrismaPromise<Array<Basket_itemsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Items base type for findUnique actions
   */
  export type ItemsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }

  /**
   * Items findUnique
   */
  export interface ItemsFindUniqueArgs extends ItemsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findUniqueOrThrow
   */
  export type ItemsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items base type for findFirst actions
   */
  export type ItemsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }

  /**
   * Items findFirst
   */
  export interface ItemsFindFirstArgs extends ItemsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Items findFirstOrThrow
   */
  export type ItemsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     * 
    **/
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items findMany
   */
  export type ItemsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter, which Items to fetch.
     * 
    **/
    where?: ItemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     * 
    **/
    orderBy?: Enumerable<ItemsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     * 
    **/
    cursor?: ItemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ItemsScalarFieldEnum>
  }


  /**
   * Items create
   */
  export type ItemsCreateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * The data needed to create a Items.
     * 
    **/
    data: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
  }


  /**
   * Items createMany
   */
  export type ItemsCreateManyArgs = {
    /**
     * The data used to create many Items.
     * 
    **/
    data: Enumerable<ItemsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Items update
   */
  export type ItemsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * The data needed to update a Items.
     * 
    **/
    data: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
    /**
     * Choose, which Items to update.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items updateMany
   */
  export type ItemsUpdateManyArgs = {
    /**
     * The data used to update Items.
     * 
    **/
    data: XOR<ItemsUpdateManyMutationInput, ItemsUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items upsert
   */
  export type ItemsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * The filter to search for the Items to update in case it exists.
     * 
    **/
    where: ItemsWhereUniqueInput
    /**
     * In case the Items found by the `where` argument doesn't exist, create a new Items with this data.
     * 
    **/
    create: XOR<ItemsCreateInput, ItemsUncheckedCreateInput>
    /**
     * In case the Items was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ItemsUpdateInput, ItemsUncheckedUpdateInput>
  }


  /**
   * Items delete
   */
  export type ItemsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
    /**
     * Filter which Items to delete.
     * 
    **/
    where: ItemsWhereUniqueInput
  }


  /**
   * Items deleteMany
   */
  export type ItemsDeleteManyArgs = {
    /**
     * Filter which Items to delete
     * 
    **/
    where?: ItemsWhereInput
  }


  /**
   * Items.basket_items
   */
  export type Items$basket_itemsArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    where?: Basket_itemsWhereInput
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    cursor?: Basket_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Basket_itemsScalarFieldEnum>
  }


  /**
   * Items without action
   */
  export type ItemsArgs = {
    /**
     * Select specific fields to fetch from the Items
     * 
    **/
    select?: ItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ItemsInclude | null
  }



  /**
   * Model Orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    delivery_price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    delivery_price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    recipient_name: string | null
    delivery_address: string | null
    delivery_postcode: string | null
    delivery_country: string | null
    delivery_price: number | null
    status: string | null
    created_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    recipient_name: string | null
    delivery_address: string | null
    delivery_postcode: string | null
    delivery_country: string | null
    delivery_price: number | null
    status: string | null
    created_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    recipient_name: number
    delivery_address: number
    delivery_postcode: number
    delivery_country: number
    delivery_price: number
    status: number
    created_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    delivery_price?: true
  }

  export type OrdersSumAggregateInputType = {
    delivery_price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    recipient_name?: true
    delivery_address?: true
    delivery_postcode?: true
    delivery_country?: true
    delivery_price?: true
    status?: true
    created_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    recipient_name?: true
    delivery_address?: true
    delivery_postcode?: true
    delivery_country?: true
    delivery_price?: true
    status?: true
    created_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    recipient_name?: true
    delivery_address?: true
    delivery_postcode?: true
    delivery_country?: true
    delivery_price?: true
    status?: true
    created_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which Orders to aggregate.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithAggregationInput>
    by: Array<OrdersScalarFieldEnum>
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect = {
    id?: boolean
    recipient_name?: boolean
    delivery_address?: boolean
    delivery_postcode?: boolean
    delivery_country?: boolean
    delivery_price?: boolean
    status?: boolean
    created_at?: boolean
    basket_items?: boolean | Orders$basket_itemsArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }


  export type OrdersInclude = {
    basket_items?: boolean | Orders$basket_itemsArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  } 

  export type OrdersGetPayload<S extends boolean | null | undefined | OrdersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Orders :
    S extends undefined ? never :
    S extends { include: any } & (OrdersArgs | OrdersFindManyArgs)
    ? Orders  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'basket_items' ? Array < Basket_itemsGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrdersArgs | OrdersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'basket_items' ? Array < Basket_itemsGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Orders ? Orders[P] : never
  } 
      : Orders


  type OrdersCountArgs = Merge<
    Omit<OrdersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }
  >

  export interface OrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrdersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrdersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs>(
      args?: SelectSubset<T, OrdersFindManyArgs>
    ): PrismaPromise<Array<OrdersGetPayload<T>>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs>(
      args: SelectSubset<T, OrdersCreateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs>(
      args?: SelectSubset<T, OrdersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs>(
      args: SelectSubset<T, OrdersDeleteArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs>(
      args: SelectSubset<T, OrdersUpdateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs>(
      args?: SelectSubset<T, OrdersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs>(
      args: SelectSubset<T, OrdersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs>(
      args: SelectSubset<T, OrdersUpsertArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrdersClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    basket_items<T extends Orders$basket_itemsArgs= {}>(args?: Subset<T, Orders$basket_itemsArgs>): PrismaPromise<Array<Basket_itemsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Orders base type for findUnique actions
   */
  export type OrdersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUnique
   */
  export interface OrdersFindUniqueArgs extends OrdersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders base type for findFirst actions
   */
  export type OrdersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * Orders findFirst
   */
  export interface OrdersFindFirstArgs extends OrdersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to create a Orders.
     * 
    **/
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to update a Orders.
     * 
    **/
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The filter to search for the Orders to update in case it exists.
     * 
    **/
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     * 
    **/
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter which Orders to delete.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders.basket_items
   */
  export type Orders$basket_itemsArgs = {
    /**
     * Select specific fields to fetch from the Basket_items
     * 
    **/
    select?: Basket_itemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Basket_itemsInclude | null
    where?: Basket_itemsWhereInput
    orderBy?: Enumerable<Basket_itemsOrderByWithRelationInput>
    cursor?: Basket_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<Basket_itemsScalarFieldEnum>
  }


  /**
   * Orders without action
   */
  export type OrdersArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Basket_itemsScalarFieldEnum: {
    id: 'id',
    item_id: 'item_id',
    quantity: 'quantity',
    created_at: 'created_at',
    order_id: 'order_id',
    purchased_price: 'purchased_price'
  };

  export type Basket_itemsScalarFieldEnum = (typeof Basket_itemsScalarFieldEnum)[keyof typeof Basket_itemsScalarFieldEnum]


  export const ItemsScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    price: 'price',
    description: 'description'
  };

  export type ItemsScalarFieldEnum = (typeof ItemsScalarFieldEnum)[keyof typeof ItemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    recipient_name: 'recipient_name',
    delivery_address: 'delivery_address',
    delivery_postcode: 'delivery_postcode',
    delivery_country: 'delivery_country',
    delivery_price: 'delivery_price',
    status: 'status',
    created_at: 'created_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Basket_itemsWhereInput = {
    AND?: Enumerable<Basket_itemsWhereInput>
    OR?: Enumerable<Basket_itemsWhereInput>
    NOT?: Enumerable<Basket_itemsWhereInput>
    id?: UuidFilter<"Basket_items"> | string
    item_id?: UuidFilter<"Basket_items"> | string
    quantity?: IntFilter<"Basket_items"> | number
    created_at?: DateTimeFilter<"Basket_items"> | Date | string
    order_id?: UuidNullableFilter<"Basket_items"> | string | null
    purchased_price?: IntNullableFilter<"Basket_items"> | number | null
    items?: XOR<ItemsRelationFilter, ItemsWhereInput>
    orders?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }

  export type Basket_itemsOrderByWithRelationInput = {
    id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    order_id?: SortOrderInput | SortOrder
    purchased_price?: SortOrderInput | SortOrder
    items?: ItemsOrderByWithRelationInput
    orders?: OrdersOrderByWithRelationInput
  }

  export type Basket_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<Basket_itemsWhereInput>
    OR?: Enumerable<Basket_itemsWhereInput>
    NOT?: Enumerable<Basket_itemsWhereInput>
    item_id?: UuidFilter<"Basket_items"> | string
    quantity?: IntFilter<"Basket_items"> | number
    created_at?: DateTimeFilter<"Basket_items"> | Date | string
    order_id?: UuidNullableFilter<"Basket_items"> | string | null
    purchased_price?: IntNullableFilter<"Basket_items"> | number | null
    items?: XOR<ItemsRelationFilter, ItemsWhereInput>
    orders?: XOR<OrdersNullableRelationFilter, OrdersWhereInput> | null
  }, "id">

  export type Basket_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    order_id?: SortOrderInput | SortOrder
    purchased_price?: SortOrderInput | SortOrder
    _count?: Basket_itemsCountOrderByAggregateInput
    _avg?: Basket_itemsAvgOrderByAggregateInput
    _max?: Basket_itemsMaxOrderByAggregateInput
    _min?: Basket_itemsMinOrderByAggregateInput
    _sum?: Basket_itemsSumOrderByAggregateInput
  }

  export type Basket_itemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Basket_itemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<Basket_itemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Basket_itemsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter<"Basket_items"> | string
    item_id?: UuidWithAggregatesFilter<"Basket_items"> | string
    quantity?: IntWithAggregatesFilter<"Basket_items"> | number
    created_at?: DateTimeWithAggregatesFilter<"Basket_items"> | Date | string
    order_id?: UuidNullableWithAggregatesFilter<"Basket_items"> | string | null
    purchased_price?: IntNullableWithAggregatesFilter<"Basket_items"> | number | null
  }

  export type ItemsWhereInput = {
    AND?: Enumerable<ItemsWhereInput>
    OR?: Enumerable<ItemsWhereInput>
    NOT?: Enumerable<ItemsWhereInput>
    id?: UuidFilter<"Items"> | string
    slug?: StringFilter<"Items"> | string
    name?: StringFilter<"Items"> | string
    price?: IntFilter<"Items"> | number
    description?: StringFilter<"Items"> | string
    basket_items?: Basket_itemsListRelationFilter
  }

  export type ItemsOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    basket_items?: Basket_itemsOrderByRelationAggregateInput
  }

  export type ItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<ItemsWhereInput>
    OR?: Enumerable<ItemsWhereInput>
    NOT?: Enumerable<ItemsWhereInput>
    slug?: StringFilter<"Items"> | string
    name?: StringFilter<"Items"> | string
    price?: IntFilter<"Items"> | number
    description?: StringFilter<"Items"> | string
    basket_items?: Basket_itemsListRelationFilter
  }, "id">

  export type ItemsOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    _count?: ItemsCountOrderByAggregateInput
    _avg?: ItemsAvgOrderByAggregateInput
    _max?: ItemsMaxOrderByAggregateInput
    _min?: ItemsMinOrderByAggregateInput
    _sum?: ItemsSumOrderByAggregateInput
  }

  export type ItemsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ItemsScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter<"Items"> | string
    slug?: StringWithAggregatesFilter<"Items"> | string
    name?: StringWithAggregatesFilter<"Items"> | string
    price?: IntWithAggregatesFilter<"Items"> | number
    description?: StringWithAggregatesFilter<"Items"> | string
  }

  export type OrdersWhereInput = {
    AND?: Enumerable<OrdersWhereInput>
    OR?: Enumerable<OrdersWhereInput>
    NOT?: Enumerable<OrdersWhereInput>
    id?: UuidFilter<"Orders"> | string
    recipient_name?: StringFilter<"Orders"> | string
    delivery_address?: StringFilter<"Orders"> | string
    delivery_postcode?: StringFilter<"Orders"> | string
    delivery_country?: StringFilter<"Orders"> | string
    delivery_price?: IntFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    basket_items?: Basket_itemsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    recipient_name?: SortOrder
    delivery_address?: SortOrder
    delivery_postcode?: SortOrder
    delivery_country?: SortOrder
    delivery_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    basket_items?: Basket_itemsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<OrdersWhereInput>
    OR?: Enumerable<OrdersWhereInput>
    NOT?: Enumerable<OrdersWhereInput>
    recipient_name?: StringFilter<"Orders"> | string
    delivery_address?: StringFilter<"Orders"> | string
    delivery_postcode?: StringFilter<"Orders"> | string
    delivery_country?: StringFilter<"Orders"> | string
    delivery_price?: IntFilter<"Orders"> | number
    status?: StringFilter<"Orders"> | string
    created_at?: DateTimeFilter<"Orders"> | Date | string
    basket_items?: Basket_itemsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    recipient_name?: SortOrder
    delivery_address?: SortOrder
    delivery_postcode?: SortOrder
    delivery_country?: SortOrder
    delivery_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    id?: UuidWithAggregatesFilter<"Orders"> | string
    recipient_name?: StringWithAggregatesFilter<"Orders"> | string
    delivery_address?: StringWithAggregatesFilter<"Orders"> | string
    delivery_postcode?: StringWithAggregatesFilter<"Orders"> | string
    delivery_country?: StringWithAggregatesFilter<"Orders"> | string
    delivery_price?: IntWithAggregatesFilter<"Orders"> | number
    status?: StringWithAggregatesFilter<"Orders"> | string
    created_at?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type Basket_itemsCreateInput = {
    id: string
    quantity: number
    created_at: Date | string
    purchased_price?: number | null
    items: ItemsCreateNestedOneWithoutBasket_itemsInput
    orders?: OrdersCreateNestedOneWithoutBasket_itemsInput
  }

  export type Basket_itemsUncheckedCreateInput = {
    id: string
    item_id: string
    quantity: number
    created_at: Date | string
    order_id?: string | null
    purchased_price?: number | null
  }

  export type Basket_itemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ItemsUpdateOneRequiredWithoutBasket_itemsNestedInput
    orders?: OrdersUpdateOneWithoutBasket_itemsNestedInput
  }

  export type Basket_itemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Basket_itemsCreateManyInput = {
    id: string
    item_id: string
    quantity: number
    created_at: Date | string
    order_id?: string | null
    purchased_price?: number | null
  }

  export type Basket_itemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Basket_itemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemsCreateInput = {
    id: string
    slug: string
    name: string
    price: number
    description: string
    basket_items?: Basket_itemsCreateNestedManyWithoutItemsInput
  }

  export type ItemsUncheckedCreateInput = {
    id: string
    slug: string
    name: string
    price: number
    description: string
    basket_items?: Basket_itemsUncheckedCreateNestedManyWithoutItemsInput
  }

  export type ItemsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    basket_items?: Basket_itemsUpdateManyWithoutItemsNestedInput
  }

  export type ItemsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    basket_items?: Basket_itemsUncheckedUpdateManyWithoutItemsNestedInput
  }

  export type ItemsCreateManyInput = {
    id: string
    slug: string
    name: string
    price: number
    description: string
  }

  export type ItemsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateInput = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date | string
    basket_items?: Basket_itemsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date | string
    basket_items?: Basket_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_items?: Basket_itemsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    basket_items?: Basket_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ItemsRelationFilter = {
    is?: ItemsWhereInput
    isNot?: ItemsWhereInput
  }

  export type OrdersNullableRelationFilter = {
    is?: OrdersWhereInput | null
    isNot?: OrdersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Basket_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    order_id?: SortOrder
    purchased_price?: SortOrder
  }

  export type Basket_itemsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    purchased_price?: SortOrder
  }

  export type Basket_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    order_id?: SortOrder
    purchased_price?: SortOrder
  }

  export type Basket_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    item_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    order_id?: SortOrder
    purchased_price?: SortOrder
  }

  export type Basket_itemsSumOrderByAggregateInput = {
    quantity?: SortOrder
    purchased_price?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Basket_itemsListRelationFilter = {
    every?: Basket_itemsWhereInput
    some?: Basket_itemsWhereInput
    none?: Basket_itemsWhereInput
  }

  export type Basket_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemsCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ItemsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ItemsMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ItemsMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
  }

  export type ItemsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    recipient_name?: SortOrder
    delivery_address?: SortOrder
    delivery_postcode?: SortOrder
    delivery_country?: SortOrder
    delivery_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    delivery_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    recipient_name?: SortOrder
    delivery_address?: SortOrder
    delivery_postcode?: SortOrder
    delivery_country?: SortOrder
    delivery_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    recipient_name?: SortOrder
    delivery_address?: SortOrder
    delivery_postcode?: SortOrder
    delivery_country?: SortOrder
    delivery_price?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    delivery_price?: SortOrder
  }

  export type ItemsCreateNestedOneWithoutBasket_itemsInput = {
    create?: XOR<ItemsCreateWithoutBasket_itemsInput, ItemsUncheckedCreateWithoutBasket_itemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutBasket_itemsInput
    connect?: ItemsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutBasket_itemsInput = {
    create?: XOR<OrdersCreateWithoutBasket_itemsInput, OrdersUncheckedCreateWithoutBasket_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutBasket_itemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemsUpdateOneRequiredWithoutBasket_itemsNestedInput = {
    create?: XOR<ItemsCreateWithoutBasket_itemsInput, ItemsUncheckedCreateWithoutBasket_itemsInput>
    connectOrCreate?: ItemsCreateOrConnectWithoutBasket_itemsInput
    upsert?: ItemsUpsertWithoutBasket_itemsInput
    connect?: ItemsWhereUniqueInput
    update?: XOR<XOR<ItemsUpdateToOneWithWhereWithoutBasket_itemsInput, ItemsUpdateWithoutBasket_itemsInput>, ItemsUncheckedUpdateWithoutBasket_itemsInput>
  }

  export type OrdersUpdateOneWithoutBasket_itemsNestedInput = {
    create?: XOR<OrdersCreateWithoutBasket_itemsInput, OrdersUncheckedCreateWithoutBasket_itemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutBasket_itemsInput
    upsert?: OrdersUpsertWithoutBasket_itemsInput
    disconnect?: OrdersWhereInput | boolean
    delete?: OrdersWhereInput | boolean
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutBasket_itemsInput, OrdersUpdateWithoutBasket_itemsInput>, OrdersUncheckedUpdateWithoutBasket_itemsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Basket_itemsCreateNestedManyWithoutItemsInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutItemsInput>, Enumerable<Basket_itemsUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutItemsInput>
    createMany?: Basket_itemsCreateManyItemsInputEnvelope
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
  }

  export type Basket_itemsUncheckedCreateNestedManyWithoutItemsInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutItemsInput>, Enumerable<Basket_itemsUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutItemsInput>
    createMany?: Basket_itemsCreateManyItemsInputEnvelope
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
  }

  export type Basket_itemsUpdateManyWithoutItemsNestedInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutItemsInput>, Enumerable<Basket_itemsUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutItemsInput>
    upsert?: Enumerable<Basket_itemsUpsertWithWhereUniqueWithoutItemsInput>
    createMany?: Basket_itemsCreateManyItemsInputEnvelope
    set?: Enumerable<Basket_itemsWhereUniqueInput>
    disconnect?: Enumerable<Basket_itemsWhereUniqueInput>
    delete?: Enumerable<Basket_itemsWhereUniqueInput>
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
    update?: Enumerable<Basket_itemsUpdateWithWhereUniqueWithoutItemsInput>
    updateMany?: Enumerable<Basket_itemsUpdateManyWithWhereWithoutItemsInput>
    deleteMany?: Enumerable<Basket_itemsScalarWhereInput>
  }

  export type Basket_itemsUncheckedUpdateManyWithoutItemsNestedInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutItemsInput>, Enumerable<Basket_itemsUncheckedCreateWithoutItemsInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutItemsInput>
    upsert?: Enumerable<Basket_itemsUpsertWithWhereUniqueWithoutItemsInput>
    createMany?: Basket_itemsCreateManyItemsInputEnvelope
    set?: Enumerable<Basket_itemsWhereUniqueInput>
    disconnect?: Enumerable<Basket_itemsWhereUniqueInput>
    delete?: Enumerable<Basket_itemsWhereUniqueInput>
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
    update?: Enumerable<Basket_itemsUpdateWithWhereUniqueWithoutItemsInput>
    updateMany?: Enumerable<Basket_itemsUpdateManyWithWhereWithoutItemsInput>
    deleteMany?: Enumerable<Basket_itemsScalarWhereInput>
  }

  export type Basket_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutOrdersInput>, Enumerable<Basket_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutOrdersInput>
    createMany?: Basket_itemsCreateManyOrdersInputEnvelope
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
  }

  export type Basket_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutOrdersInput>, Enumerable<Basket_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutOrdersInput>
    createMany?: Basket_itemsCreateManyOrdersInputEnvelope
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
  }

  export type Basket_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutOrdersInput>, Enumerable<Basket_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<Basket_itemsUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: Basket_itemsCreateManyOrdersInputEnvelope
    set?: Enumerable<Basket_itemsWhereUniqueInput>
    disconnect?: Enumerable<Basket_itemsWhereUniqueInput>
    delete?: Enumerable<Basket_itemsWhereUniqueInput>
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
    update?: Enumerable<Basket_itemsUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<Basket_itemsUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<Basket_itemsScalarWhereInput>
  }

  export type Basket_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Enumerable<Basket_itemsCreateWithoutOrdersInput>, Enumerable<Basket_itemsUncheckedCreateWithoutOrdersInput>>
    connectOrCreate?: Enumerable<Basket_itemsCreateOrConnectWithoutOrdersInput>
    upsert?: Enumerable<Basket_itemsUpsertWithWhereUniqueWithoutOrdersInput>
    createMany?: Basket_itemsCreateManyOrdersInputEnvelope
    set?: Enumerable<Basket_itemsWhereUniqueInput>
    disconnect?: Enumerable<Basket_itemsWhereUniqueInput>
    delete?: Enumerable<Basket_itemsWhereUniqueInput>
    connect?: Enumerable<Basket_itemsWhereUniqueInput>
    update?: Enumerable<Basket_itemsUpdateWithWhereUniqueWithoutOrdersInput>
    updateMany?: Enumerable<Basket_itemsUpdateManyWithWhereWithoutOrdersInput>
    deleteMany?: Enumerable<Basket_itemsScalarWhereInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Enumerable<Date> | Enumerable<string> | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: Enumerable<number> | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    notIn?: Enumerable<string> | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ItemsCreateWithoutBasket_itemsInput = {
    id: string
    slug: string
    name: string
    price: number
    description: string
  }

  export type ItemsUncheckedCreateWithoutBasket_itemsInput = {
    id: string
    slug: string
    name: string
    price: number
    description: string
  }

  export type ItemsCreateOrConnectWithoutBasket_itemsInput = {
    where: ItemsWhereUniqueInput
    create: XOR<ItemsCreateWithoutBasket_itemsInput, ItemsUncheckedCreateWithoutBasket_itemsInput>
  }

  export type OrdersCreateWithoutBasket_itemsInput = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date | string
  }

  export type OrdersUncheckedCreateWithoutBasket_itemsInput = {
    id: string
    recipient_name: string
    delivery_address: string
    delivery_postcode: string
    delivery_country: string
    delivery_price: number
    status: string
    created_at: Date | string
  }

  export type OrdersCreateOrConnectWithoutBasket_itemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBasket_itemsInput, OrdersUncheckedCreateWithoutBasket_itemsInput>
  }

  export type ItemsUpsertWithoutBasket_itemsInput = {
    update: XOR<ItemsUpdateWithoutBasket_itemsInput, ItemsUncheckedUpdateWithoutBasket_itemsInput>
    create: XOR<ItemsCreateWithoutBasket_itemsInput, ItemsUncheckedCreateWithoutBasket_itemsInput>
    where?: ItemsWhereInput
  }

  export type ItemsUpdateToOneWithWhereWithoutBasket_itemsInput = {
    where?: ItemsWhereInput
    data: XOR<ItemsUpdateWithoutBasket_itemsInput, ItemsUncheckedUpdateWithoutBasket_itemsInput>
  }

  export type ItemsUpdateWithoutBasket_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ItemsUncheckedUpdateWithoutBasket_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersUpsertWithoutBasket_itemsInput = {
    update: XOR<OrdersUpdateWithoutBasket_itemsInput, OrdersUncheckedUpdateWithoutBasket_itemsInput>
    create: XOR<OrdersCreateWithoutBasket_itemsInput, OrdersUncheckedCreateWithoutBasket_itemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutBasket_itemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutBasket_itemsInput, OrdersUncheckedUpdateWithoutBasket_itemsInput>
  }

  export type OrdersUpdateWithoutBasket_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateWithoutBasket_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    recipient_name?: StringFieldUpdateOperationsInput | string
    delivery_address?: StringFieldUpdateOperationsInput | string
    delivery_postcode?: StringFieldUpdateOperationsInput | string
    delivery_country?: StringFieldUpdateOperationsInput | string
    delivery_price?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Basket_itemsCreateWithoutItemsInput = {
    id: string
    quantity: number
    created_at: Date | string
    purchased_price?: number | null
    orders?: OrdersCreateNestedOneWithoutBasket_itemsInput
  }

  export type Basket_itemsUncheckedCreateWithoutItemsInput = {
    id: string
    quantity: number
    created_at: Date | string
    order_id?: string | null
    purchased_price?: number | null
  }

  export type Basket_itemsCreateOrConnectWithoutItemsInput = {
    where: Basket_itemsWhereUniqueInput
    create: XOR<Basket_itemsCreateWithoutItemsInput, Basket_itemsUncheckedCreateWithoutItemsInput>
  }

  export type Basket_itemsCreateManyItemsInputEnvelope = {
    data: Enumerable<Basket_itemsCreateManyItemsInput>
    skipDuplicates?: boolean
  }

  export type Basket_itemsUpsertWithWhereUniqueWithoutItemsInput = {
    where: Basket_itemsWhereUniqueInput
    update: XOR<Basket_itemsUpdateWithoutItemsInput, Basket_itemsUncheckedUpdateWithoutItemsInput>
    create: XOR<Basket_itemsCreateWithoutItemsInput, Basket_itemsUncheckedCreateWithoutItemsInput>
  }

  export type Basket_itemsUpdateWithWhereUniqueWithoutItemsInput = {
    where: Basket_itemsWhereUniqueInput
    data: XOR<Basket_itemsUpdateWithoutItemsInput, Basket_itemsUncheckedUpdateWithoutItemsInput>
  }

  export type Basket_itemsUpdateManyWithWhereWithoutItemsInput = {
    where: Basket_itemsScalarWhereInput
    data: XOR<Basket_itemsUpdateManyMutationInput, Basket_itemsUncheckedUpdateManyWithoutItemsInput>
  }

  export type Basket_itemsScalarWhereInput = {
    AND?: Enumerable<Basket_itemsScalarWhereInput>
    OR?: Enumerable<Basket_itemsScalarWhereInput>
    NOT?: Enumerable<Basket_itemsScalarWhereInput>
    id?: UuidFilter<"Basket_items"> | string
    item_id?: UuidFilter<"Basket_items"> | string
    quantity?: IntFilter<"Basket_items"> | number
    created_at?: DateTimeFilter<"Basket_items"> | Date | string
    order_id?: UuidNullableFilter<"Basket_items"> | string | null
    purchased_price?: IntNullableFilter<"Basket_items"> | number | null
  }

  export type Basket_itemsCreateWithoutOrdersInput = {
    id: string
    quantity: number
    created_at: Date | string
    purchased_price?: number | null
    items: ItemsCreateNestedOneWithoutBasket_itemsInput
  }

  export type Basket_itemsUncheckedCreateWithoutOrdersInput = {
    id: string
    item_id: string
    quantity: number
    created_at: Date | string
    purchased_price?: number | null
  }

  export type Basket_itemsCreateOrConnectWithoutOrdersInput = {
    where: Basket_itemsWhereUniqueInput
    create: XOR<Basket_itemsCreateWithoutOrdersInput, Basket_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type Basket_itemsCreateManyOrdersInputEnvelope = {
    data: Enumerable<Basket_itemsCreateManyOrdersInput>
    skipDuplicates?: boolean
  }

  export type Basket_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Basket_itemsWhereUniqueInput
    update: XOR<Basket_itemsUpdateWithoutOrdersInput, Basket_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<Basket_itemsCreateWithoutOrdersInput, Basket_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type Basket_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Basket_itemsWhereUniqueInput
    data: XOR<Basket_itemsUpdateWithoutOrdersInput, Basket_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type Basket_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: Basket_itemsScalarWhereInput
    data: XOR<Basket_itemsUpdateManyMutationInput, Basket_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type Basket_itemsCreateManyItemsInput = {
    id: string
    quantity: number
    created_at: Date | string
    order_id?: string | null
    purchased_price?: number | null
  }

  export type Basket_itemsUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrdersUpdateOneWithoutBasket_itemsNestedInput
  }

  export type Basket_itemsUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Basket_itemsUncheckedUpdateManyWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order_id?: NullableStringFieldUpdateOperationsInput | string | null
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Basket_itemsCreateManyOrdersInput = {
    id: string
    item_id: string
    quantity: number
    created_at: Date | string
    purchased_price?: number | null
  }

  export type Basket_itemsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
    items?: ItemsUpdateOneRequiredWithoutBasket_itemsNestedInput
  }

  export type Basket_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Basket_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    item_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased_price?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}