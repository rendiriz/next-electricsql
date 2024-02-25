import { z } from 'zod';
import type { Prisma } from './prismaClient';
import { type TableSchema, DbSchema, Relation, ElectricClient, type HKT } from 'electric-sql/client/model';
import migrations from './migrations';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const Basket_itemsScalarFieldEnumSchema = z.enum(['id','item_id','quantity','created_at','order_id','purchased_price']);

export const ItemsScalarFieldEnumSchema = z.enum(['id','slug','name','price','description']);

export const OrdersScalarFieldEnumSchema = z.enum(['id','recipient_name','delivery_address','delivery_postcode','delivery_country','delivery_price','status','created_at']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// BASKET ITEMS SCHEMA
/////////////////////////////////////////

export const Basket_itemsSchema = z.object({
  id: z.string().uuid(),
  item_id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  order_id: z.string().uuid().nullable(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).nullable(),
})

export type Basket_items = z.infer<typeof Basket_itemsSchema>

/////////////////////////////////////////
// ITEMS SCHEMA
/////////////////////////////////////////

export const ItemsSchema = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  name: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  description: z.string(),
})

export type Items = z.infer<typeof ItemsSchema>

/////////////////////////////////////////
// ORDERS SCHEMA
/////////////////////////////////////////

export const OrdersSchema = z.object({
  id: z.string().uuid(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number().int().gte(-2147483648).lte(2147483647),
  status: z.string(),
  created_at: z.coerce.date(),
})

export type Orders = z.infer<typeof OrdersSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// BASKET ITEMS
//------------------------------------------------------

export const Basket_itemsIncludeSchema: z.ZodType<Prisma.Basket_itemsInclude> = z.object({
  items: z.union([z.boolean(),z.lazy(() => ItemsArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrdersArgsSchema)]).optional(),
}).strict()

export const Basket_itemsArgsSchema: z.ZodType<Prisma.Basket_itemsArgs> = z.object({
  select: z.lazy(() => Basket_itemsSelectSchema).optional(),
  include: z.lazy(() => Basket_itemsIncludeSchema).optional(),
}).strict();

export const Basket_itemsSelectSchema: z.ZodType<Prisma.Basket_itemsSelect> = z.object({
  id: z.boolean().optional(),
  item_id: z.boolean().optional(),
  quantity: z.boolean().optional(),
  created_at: z.boolean().optional(),
  order_id: z.boolean().optional(),
  purchased_price: z.boolean().optional(),
  items: z.union([z.boolean(),z.lazy(() => ItemsArgsSchema)]).optional(),
  orders: z.union([z.boolean(),z.lazy(() => OrdersArgsSchema)]).optional(),
}).strict()

// ITEMS
//------------------------------------------------------

export const ItemsIncludeSchema: z.ZodType<Prisma.ItemsInclude> = z.object({
  basket_items: z.union([z.boolean(),z.lazy(() => Basket_itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ItemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ItemsArgsSchema: z.ZodType<Prisma.ItemsArgs> = z.object({
  select: z.lazy(() => ItemsSelectSchema).optional(),
  include: z.lazy(() => ItemsIncludeSchema).optional(),
}).strict();

export const ItemsCountOutputTypeArgsSchema: z.ZodType<Prisma.ItemsCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ItemsCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ItemsCountOutputTypeSelectSchema: z.ZodType<Prisma.ItemsCountOutputTypeSelect> = z.object({
  basket_items: z.boolean().optional(),
}).strict();

export const ItemsSelectSchema: z.ZodType<Prisma.ItemsSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  name: z.boolean().optional(),
  price: z.boolean().optional(),
  description: z.boolean().optional(),
  basket_items: z.union([z.boolean(),z.lazy(() => Basket_itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ItemsCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ORDERS
//------------------------------------------------------

export const OrdersIncludeSchema: z.ZodType<Prisma.OrdersInclude> = z.object({
  basket_items: z.union([z.boolean(),z.lazy(() => Basket_itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrdersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OrdersArgsSchema: z.ZodType<Prisma.OrdersArgs> = z.object({
  select: z.lazy(() => OrdersSelectSchema).optional(),
  include: z.lazy(() => OrdersIncludeSchema).optional(),
}).strict();

export const OrdersCountOutputTypeArgsSchema: z.ZodType<Prisma.OrdersCountOutputTypeArgs> = z.object({
  select: z.lazy(() => OrdersCountOutputTypeSelectSchema).nullish(),
}).strict();

export const OrdersCountOutputTypeSelectSchema: z.ZodType<Prisma.OrdersCountOutputTypeSelect> = z.object({
  basket_items: z.boolean().optional(),
}).strict();

export const OrdersSelectSchema: z.ZodType<Prisma.OrdersSelect> = z.object({
  id: z.boolean().optional(),
  recipient_name: z.boolean().optional(),
  delivery_address: z.boolean().optional(),
  delivery_postcode: z.boolean().optional(),
  delivery_country: z.boolean().optional(),
  delivery_price: z.boolean().optional(),
  status: z.boolean().optional(),
  created_at: z.boolean().optional(),
  basket_items: z.union([z.boolean(),z.lazy(() => Basket_itemsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OrdersCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const Basket_itemsWhereInputSchema: z.ZodType<Prisma.Basket_itemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Basket_itemsWhereInputSchema),z.lazy(() => Basket_itemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Basket_itemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Basket_itemsWhereInputSchema),z.lazy(() => Basket_itemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  purchased_price: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  items: z.union([ z.lazy(() => ItemsRelationFilterSchema),z.lazy(() => ItemsWhereInputSchema) ]).optional(),
  orders: z.union([ z.lazy(() => OrdersRelationFilterSchema),z.lazy(() => OrdersWhereInputSchema) ]).optional().nullable(),
}).strict();

export const Basket_itemsOrderByWithRelationInputSchema: z.ZodType<Prisma.Basket_itemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional(),
  items: z.lazy(() => ItemsOrderByWithRelationInputSchema).optional(),
  orders: z.lazy(() => OrdersOrderByWithRelationInputSchema).optional()
}).strict();

export const Basket_itemsWhereUniqueInputSchema: z.ZodType<Prisma.Basket_itemsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const Basket_itemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.Basket_itemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => Basket_itemsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => Basket_itemsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => Basket_itemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => Basket_itemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => Basket_itemsSumOrderByAggregateInputSchema).optional()
}).strict();

export const Basket_itemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.Basket_itemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => Basket_itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => Basket_itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => Basket_itemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Basket_itemsScalarWhereWithAggregatesInputSchema),z.lazy(() => Basket_itemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  item_id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  purchased_price: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const ItemsWhereInputSchema: z.ZodType<Prisma.ItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsWhereInputSchema),z.lazy(() => ItemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  basket_items: z.lazy(() => Basket_itemsListRelationFilterSchema).optional()
}).strict();

export const ItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  basket_items: z.lazy(() => Basket_itemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ItemsWhereUniqueInputSchema: z.ZodType<Prisma.ItemsWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const ItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ItemsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ItemsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ItemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ItemsSumOrderByAggregateInputSchema).optional()
}).strict();

export const ItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => ItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const OrdersWhereInputSchema: z.ZodType<Prisma.OrdersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OrdersWhereInputSchema),z.lazy(() => OrdersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrdersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrdersWhereInputSchema),z.lazy(() => OrdersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  recipient_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  delivery_address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  delivery_postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  delivery_country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  delivery_price: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  basket_items: z.lazy(() => Basket_itemsListRelationFilterSchema).optional()
}).strict();

export const OrdersOrderByWithRelationInputSchema: z.ZodType<Prisma.OrdersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional(),
  delivery_address: z.lazy(() => SortOrderSchema).optional(),
  delivery_postcode: z.lazy(() => SortOrderSchema).optional(),
  delivery_country: z.lazy(() => SortOrderSchema).optional(),
  delivery_price: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  basket_items: z.lazy(() => Basket_itemsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const OrdersWhereUniqueInputSchema: z.ZodType<Prisma.OrdersWhereUniqueInput> = z.object({
  id: z.string().uuid().optional()
}).strict();

export const OrdersOrderByWithAggregationInputSchema: z.ZodType<Prisma.OrdersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional(),
  delivery_address: z.lazy(() => SortOrderSchema).optional(),
  delivery_postcode: z.lazy(() => SortOrderSchema).optional(),
  delivery_country: z.lazy(() => SortOrderSchema).optional(),
  delivery_price: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OrdersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OrdersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OrdersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OrdersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OrdersSumOrderByAggregateInputSchema).optional()
}).strict();

export const OrdersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OrdersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => OrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OrdersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OrdersScalarWhereWithAggregatesInputSchema),z.lazy(() => OrdersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  recipient_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  delivery_address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  delivery_postcode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  delivery_country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  delivery_price: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const Basket_itemsCreateInputSchema: z.ZodType<Prisma.Basket_itemsCreateInput> = z.object({
  id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable(),
  items: z.lazy(() => ItemsCreateNestedOneWithoutBasket_itemsInputSchema),
  orders: z.lazy(() => OrdersCreateNestedOneWithoutBasket_itemsInputSchema).optional()
}).strict();

export const Basket_itemsUncheckedCreateInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  item_id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  order_id: z.string().uuid().optional().nullable(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const Basket_itemsUpdateInputSchema: z.ZodType<Prisma.Basket_itemsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchased_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => ItemsUpdateOneRequiredWithoutBasket_itemsNestedInputSchema).optional(),
  orders: z.lazy(() => OrdersUpdateOneWithoutBasket_itemsNestedInputSchema).optional()
}).strict();

export const Basket_itemsUncheckedUpdateInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchased_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Basket_itemsCreateManyInputSchema: z.ZodType<Prisma.Basket_itemsCreateManyInput> = z.object({
  id: z.string().uuid(),
  item_id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  order_id: z.string().uuid().optional().nullable(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const Basket_itemsUpdateManyMutationInputSchema: z.ZodType<Prisma.Basket_itemsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchased_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Basket_itemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchased_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ItemsCreateInputSchema: z.ZodType<Prisma.ItemsCreateInput> = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  name: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  description: z.string(),
  basket_items: z.lazy(() => Basket_itemsCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const ItemsUncheckedCreateInputSchema: z.ZodType<Prisma.ItemsUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  name: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  description: z.string(),
  basket_items: z.lazy(() => Basket_itemsUncheckedCreateNestedManyWithoutItemsInputSchema).optional()
}).strict();

export const ItemsUpdateInputSchema: z.ZodType<Prisma.ItemsUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  basket_items: z.lazy(() => Basket_itemsUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const ItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  basket_items: z.lazy(() => Basket_itemsUncheckedUpdateManyWithoutItemsNestedInputSchema).optional()
}).strict();

export const ItemsCreateManyInputSchema: z.ZodType<Prisma.ItemsCreateManyInput> = z.object({
  id: z.string().uuid(),
  slug: z.string(),
  name: z.string(),
  price: z.number().int().gte(-2147483648).lte(2147483647),
  description: z.string()
}).strict();

export const ItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemsUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrdersCreateInputSchema: z.ZodType<Prisma.OrdersCreateInput> = z.object({
  id: z.string().uuid(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number().int().gte(-2147483648).lte(2147483647),
  status: z.string(),
  created_at: z.coerce.date(),
  basket_items: z.lazy(() => Basket_itemsCreateNestedManyWithoutOrdersInputSchema).optional()
}).strict();

export const OrdersUncheckedCreateInputSchema: z.ZodType<Prisma.OrdersUncheckedCreateInput> = z.object({
  id: z.string().uuid(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number().int().gte(-2147483648).lte(2147483647),
  status: z.string(),
  created_at: z.coerce.date(),
  basket_items: z.lazy(() => Basket_itemsUncheckedCreateNestedManyWithoutOrdersInputSchema).optional()
}).strict();

export const OrdersUpdateInputSchema: z.ZodType<Prisma.OrdersUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  basket_items: z.lazy(() => Basket_itemsUpdateManyWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrdersUncheckedUpdateInputSchema: z.ZodType<Prisma.OrdersUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  basket_items: z.lazy(() => Basket_itemsUncheckedUpdateManyWithoutOrdersNestedInputSchema).optional()
}).strict();

export const OrdersCreateManyInputSchema: z.ZodType<Prisma.OrdersCreateManyInput> = z.object({
  id: z.string().uuid(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number().int().gte(-2147483648).lte(2147483647),
  status: z.string(),
  created_at: z.coerce.date()
}).strict();

export const OrdersUpdateManyMutationInputSchema: z.ZodType<Prisma.OrdersUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrdersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OrdersUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const UuidNullableFilterSchema: z.ZodType<Prisma.UuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ItemsRelationFilterSchema: z.ZodType<Prisma.ItemsRelationFilter> = z.object({
  is: z.lazy(() => ItemsWhereInputSchema).optional(),
  isNot: z.lazy(() => ItemsWhereInputSchema).optional()
}).strict();

export const OrdersRelationFilterSchema: z.ZodType<Prisma.OrdersRelationFilter> = z.object({
  is: z.lazy(() => OrdersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => OrdersWhereInputSchema).optional().nullable()
}).strict();

export const Basket_itemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.Basket_itemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Basket_itemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.Basket_itemsAvgOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Basket_itemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.Basket_itemsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Basket_itemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.Basket_itemsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  item_id: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional(),
  order_id: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const Basket_itemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.Basket_itemsSumOrderByAggregateInput> = z.object({
  quantity: z.lazy(() => SortOrderSchema).optional(),
  purchased_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const UuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.UuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const Basket_itemsListRelationFilterSchema: z.ZodType<Prisma.Basket_itemsListRelationFilter> = z.object({
  every: z.lazy(() => Basket_itemsWhereInputSchema).optional(),
  some: z.lazy(() => Basket_itemsWhereInputSchema).optional(),
  none: z.lazy(() => Basket_itemsWhereInputSchema).optional()
}).strict();

export const Basket_itemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.Basket_itemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.ItemsSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const OrdersCountOrderByAggregateInputSchema: z.ZodType<Prisma.OrdersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional(),
  delivery_address: z.lazy(() => SortOrderSchema).optional(),
  delivery_postcode: z.lazy(() => SortOrderSchema).optional(),
  delivery_country: z.lazy(() => SortOrderSchema).optional(),
  delivery_price: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrdersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OrdersAvgOrderByAggregateInput> = z.object({
  delivery_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrdersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OrdersMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional(),
  delivery_address: z.lazy(() => SortOrderSchema).optional(),
  delivery_postcode: z.lazy(() => SortOrderSchema).optional(),
  delivery_country: z.lazy(() => SortOrderSchema).optional(),
  delivery_price: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrdersMinOrderByAggregateInputSchema: z.ZodType<Prisma.OrdersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  recipient_name: z.lazy(() => SortOrderSchema).optional(),
  delivery_address: z.lazy(() => SortOrderSchema).optional(),
  delivery_postcode: z.lazy(() => SortOrderSchema).optional(),
  delivery_country: z.lazy(() => SortOrderSchema).optional(),
  delivery_price: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  created_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OrdersSumOrderByAggregateInputSchema: z.ZodType<Prisma.OrdersSumOrderByAggregateInput> = z.object({
  delivery_price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ItemsCreateNestedOneWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsCreateNestedOneWithoutBasket_itemsInput> = z.object({
  create: z.union([ z.lazy(() => ItemsCreateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedCreateWithoutBasket_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ItemsCreateOrConnectWithoutBasket_itemsInputSchema).optional(),
  connect: z.lazy(() => ItemsWhereUniqueInputSchema).optional()
}).strict();

export const OrdersCreateNestedOneWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersCreateNestedOneWithoutBasket_itemsInput> = z.object({
  create: z.union([ z.lazy(() => OrdersCreateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedCreateWithoutBasket_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrdersCreateOrConnectWithoutBasket_itemsInputSchema).optional(),
  connect: z.lazy(() => OrdersWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ItemsUpdateOneRequiredWithoutBasket_itemsNestedInputSchema: z.ZodType<Prisma.ItemsUpdateOneRequiredWithoutBasket_itemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ItemsCreateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedCreateWithoutBasket_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ItemsCreateOrConnectWithoutBasket_itemsInputSchema).optional(),
  upsert: z.lazy(() => ItemsUpsertWithoutBasket_itemsInputSchema).optional(),
  connect: z.lazy(() => ItemsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ItemsUpdateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedUpdateWithoutBasket_itemsInputSchema) ]).optional(),
}).strict();

export const OrdersUpdateOneWithoutBasket_itemsNestedInputSchema: z.ZodType<Prisma.OrdersUpdateOneWithoutBasket_itemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => OrdersCreateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedCreateWithoutBasket_itemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrdersCreateOrConnectWithoutBasket_itemsInputSchema).optional(),
  upsert: z.lazy(() => OrdersUpsertWithoutBasket_itemsInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => OrdersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OrdersUpdateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedUpdateWithoutBasket_itemsInputSchema) ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const Basket_itemsCreateNestedManyWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsCreateNestedManyWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyItemsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUncheckedCreateNestedManyWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedCreateNestedManyWithoutItemsInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyItemsInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.Basket_itemsUpdateManyWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyItemsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutItemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUncheckedUpdateManyWithoutItemsNestedInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateManyWithoutItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutItemsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyItemsInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutItemsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutItemsInputSchema),z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutItemsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsCreateNestedManyWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsCreateNestedManyWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyOrdersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUncheckedCreateNestedManyWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedCreateNestedManyWithoutOrdersInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyOrdersInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUpdateManyWithoutOrdersNestedInputSchema: z.ZodType<Prisma.Basket_itemsUpdateManyWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyOrdersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutOrdersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const Basket_itemsUncheckedUpdateManyWithoutOrdersNestedInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateManyWithoutOrdersNestedInput> = z.object({
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema).array(),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema),z.lazy(() => Basket_itemsCreateOrConnectWithoutOrdersInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpsertWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  createMany: z.lazy(() => Basket_itemsCreateManyOrdersInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => Basket_itemsWhereUniqueInputSchema),z.lazy(() => Basket_itemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpdateWithWhereUniqueWithoutOrdersInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUpdateManyWithWhereWithoutOrdersInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidFilterSchema) ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedUuidNullableFilterSchema: z.ZodType<Prisma.NestedUuidNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedUuidNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedUuidNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const ItemsCreateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsCreateWithoutBasket_itemsInput> = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string()
}).strict();

export const ItemsUncheckedCreateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsUncheckedCreateWithoutBasket_itemsInput> = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string()
}).strict();

export const ItemsCreateOrConnectWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsCreateOrConnectWithoutBasket_itemsInput> = z.object({
  where: z.lazy(() => ItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ItemsCreateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedCreateWithoutBasket_itemsInputSchema) ]),
}).strict();

export const OrdersCreateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersCreateWithoutBasket_itemsInput> = z.object({
  id: z.string(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number(),
  status: z.string(),
  created_at: z.coerce.date()
}).strict();

export const OrdersUncheckedCreateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersUncheckedCreateWithoutBasket_itemsInput> = z.object({
  id: z.string(),
  recipient_name: z.string(),
  delivery_address: z.string(),
  delivery_postcode: z.string(),
  delivery_country: z.string(),
  delivery_price: z.number(),
  status: z.string(),
  created_at: z.coerce.date()
}).strict();

export const OrdersCreateOrConnectWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersCreateOrConnectWithoutBasket_itemsInput> = z.object({
  where: z.lazy(() => OrdersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OrdersCreateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedCreateWithoutBasket_itemsInputSchema) ]),
}).strict();

export const ItemsUpsertWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsUpsertWithoutBasket_itemsInput> = z.object({
  update: z.union([ z.lazy(() => ItemsUpdateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedUpdateWithoutBasket_itemsInputSchema) ]),
  create: z.union([ z.lazy(() => ItemsCreateWithoutBasket_itemsInputSchema),z.lazy(() => ItemsUncheckedCreateWithoutBasket_itemsInputSchema) ]),
}).strict();

export const ItemsUpdateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsUpdateWithoutBasket_itemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ItemsUncheckedUpdateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.ItemsUncheckedUpdateWithoutBasket_itemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrdersUpsertWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersUpsertWithoutBasket_itemsInput> = z.object({
  update: z.union([ z.lazy(() => OrdersUpdateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedUpdateWithoutBasket_itemsInputSchema) ]),
  create: z.union([ z.lazy(() => OrdersCreateWithoutBasket_itemsInputSchema),z.lazy(() => OrdersUncheckedCreateWithoutBasket_itemsInputSchema) ]),
}).strict();

export const OrdersUpdateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersUpdateWithoutBasket_itemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OrdersUncheckedUpdateWithoutBasket_itemsInputSchema: z.ZodType<Prisma.OrdersUncheckedUpdateWithoutBasket_itemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  recipient_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  delivery_price: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const Basket_itemsCreateWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsCreateWithoutItemsInput> = z.object({
  id: z.string(),
  quantity: z.number(),
  created_at: z.coerce.date(),
  purchased_price: z.number().optional().nullable(),
  orders: z.lazy(() => OrdersCreateNestedOneWithoutBasket_itemsInputSchema).optional()
}).strict();

export const Basket_itemsUncheckedCreateWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedCreateWithoutItemsInput> = z.object({
  id: z.string(),
  quantity: z.number(),
  created_at: z.coerce.date(),
  order_id: z.string().optional().nullable(),
  purchased_price: z.number().optional().nullable()
}).strict();

export const Basket_itemsCreateOrConnectWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsCreateOrConnectWithoutItemsInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const Basket_itemsCreateManyItemsInputEnvelopeSchema: z.ZodType<Prisma.Basket_itemsCreateManyItemsInputEnvelope> = z.object({
  data: z.lazy(() => Basket_itemsCreateManyItemsInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Basket_itemsUpsertWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUpsertWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateWithoutItemsInputSchema) ]),
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutItemsInputSchema) ]),
}).strict();

export const Basket_itemsUpdateWithWhereUniqueWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUpdateWithWhereUniqueWithoutItemsInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Basket_itemsUpdateWithoutItemsInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateWithoutItemsInputSchema) ]),
}).strict();

export const Basket_itemsUpdateManyWithWhereWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUpdateManyWithWhereWithoutItemsInput> = z.object({
  where: z.lazy(() => Basket_itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Basket_itemsUpdateManyMutationInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateManyWithoutBasket_itemsInputSchema) ]),
}).strict();

export const Basket_itemsScalarWhereInputSchema: z.ZodType<Prisma.Basket_itemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => Basket_itemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => Basket_itemsScalarWhereInputSchema),z.lazy(() => Basket_itemsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  item_id: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  created_at: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  order_id: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  purchased_price: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const Basket_itemsCreateWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsCreateWithoutOrdersInput> = z.object({
  id: z.string(),
  quantity: z.number(),
  created_at: z.coerce.date(),
  purchased_price: z.number().optional().nullable(),
  items: z.lazy(() => ItemsCreateNestedOneWithoutBasket_itemsInputSchema)
}).strict();

export const Basket_itemsUncheckedCreateWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedCreateWithoutOrdersInput> = z.object({
  id: z.string(),
  item_id: z.string(),
  quantity: z.number(),
  created_at: z.coerce.date(),
  purchased_price: z.number().optional().nullable()
}).strict();

export const Basket_itemsCreateOrConnectWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsCreateOrConnectWithoutOrdersInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const Basket_itemsCreateManyOrdersInputEnvelopeSchema: z.ZodType<Prisma.Basket_itemsCreateManyOrdersInputEnvelope> = z.object({
  data: z.lazy(() => Basket_itemsCreateManyOrdersInputSchema).array(),
  skipDuplicates: z.boolean().optional()
}).strict();

export const Basket_itemsUpsertWithWhereUniqueWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUpsertWithWhereUniqueWithoutOrdersInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => Basket_itemsUpdateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateWithoutOrdersInputSchema) ]),
  create: z.union([ z.lazy(() => Basket_itemsCreateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedCreateWithoutOrdersInputSchema) ]),
}).strict();

export const Basket_itemsUpdateWithWhereUniqueWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUpdateWithWhereUniqueWithoutOrdersInput> = z.object({
  where: z.lazy(() => Basket_itemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => Basket_itemsUpdateWithoutOrdersInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateWithoutOrdersInputSchema) ]),
}).strict();

export const Basket_itemsUpdateManyWithWhereWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUpdateManyWithWhereWithoutOrdersInput> = z.object({
  where: z.lazy(() => Basket_itemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => Basket_itemsUpdateManyMutationInputSchema),z.lazy(() => Basket_itemsUncheckedUpdateManyWithoutBasket_itemsInputSchema) ]),
}).strict();

export const Basket_itemsCreateManyItemsInputSchema: z.ZodType<Prisma.Basket_itemsCreateManyItemsInput> = z.object({
  id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  order_id: z.string().uuid().optional().nullable(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const Basket_itemsUpdateWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchased_price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orders: z.lazy(() => OrdersUpdateOneWithoutBasket_itemsNestedInputSchema).optional()
}).strict();

export const Basket_itemsUncheckedUpdateWithoutItemsInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateWithoutItemsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchased_price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Basket_itemsUncheckedUpdateManyWithoutBasket_itemsInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateManyWithoutBasket_itemsInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  order_id: z.union([ z.string().uuid(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchased_price: z.union([ z.number().int().gte(-2147483648).lte(2147483647),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const Basket_itemsCreateManyOrdersInputSchema: z.ZodType<Prisma.Basket_itemsCreateManyOrdersInput> = z.object({
  id: z.string().uuid(),
  item_id: z.string().uuid(),
  quantity: z.number().int().gte(-2147483648).lte(2147483647),
  created_at: z.coerce.date(),
  purchased_price: z.number().int().gte(-2147483648).lte(2147483647).optional().nullable()
}).strict();

export const Basket_itemsUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchased_price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  items: z.lazy(() => ItemsUpdateOneRequiredWithoutBasket_itemsNestedInputSchema).optional()
}).strict();

export const Basket_itemsUncheckedUpdateWithoutOrdersInputSchema: z.ZodType<Prisma.Basket_itemsUncheckedUpdateWithoutOrdersInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  item_id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  created_at: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchased_price: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const Basket_itemsFindFirstArgsSchema: z.ZodType<Prisma.Basket_itemsFindFirstArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereInputSchema.optional(),
  orderBy: z.union([ Basket_itemsOrderByWithRelationInputSchema.array(),Basket_itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: Basket_itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Basket_itemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsFindFirstArgs>

export const Basket_itemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.Basket_itemsFindFirstOrThrowArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereInputSchema.optional(),
  orderBy: z.union([ Basket_itemsOrderByWithRelationInputSchema.array(),Basket_itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: Basket_itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Basket_itemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsFindFirstOrThrowArgs>

export const Basket_itemsFindManyArgsSchema: z.ZodType<Prisma.Basket_itemsFindManyArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereInputSchema.optional(),
  orderBy: z.union([ Basket_itemsOrderByWithRelationInputSchema.array(),Basket_itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: Basket_itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: Basket_itemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsFindManyArgs>

export const Basket_itemsAggregateArgsSchema: z.ZodType<Prisma.Basket_itemsAggregateArgs> = z.object({
  where: Basket_itemsWhereInputSchema.optional(),
  orderBy: z.union([ Basket_itemsOrderByWithRelationInputSchema.array(),Basket_itemsOrderByWithRelationInputSchema ]).optional(),
  cursor: Basket_itemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsAggregateArgs>

export const Basket_itemsGroupByArgsSchema: z.ZodType<Prisma.Basket_itemsGroupByArgs> = z.object({
  where: Basket_itemsWhereInputSchema.optional(),
  orderBy: z.union([ Basket_itemsOrderByWithAggregationInputSchema.array(),Basket_itemsOrderByWithAggregationInputSchema ]).optional(),
  by: Basket_itemsScalarFieldEnumSchema.array(),
  having: Basket_itemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsGroupByArgs>

export const Basket_itemsFindUniqueArgsSchema: z.ZodType<Prisma.Basket_itemsFindUniqueArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Basket_itemsFindUniqueArgs>

export const Basket_itemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.Basket_itemsFindUniqueOrThrowArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Basket_itemsFindUniqueOrThrowArgs>

export const ItemsFindFirstArgsSchema: z.ZodType<Prisma.ItemsFindFirstArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ItemsFindFirstArgs>

export const ItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindFirstOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ItemsFindFirstOrThrowArgs>

export const ItemsFindManyArgsSchema: z.ZodType<Prisma.ItemsFindManyArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ItemsScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.ItemsFindManyArgs>

export const ItemsAggregateArgsSchema: z.ZodType<Prisma.ItemsAggregateArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithRelationInputSchema.array(),ItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: ItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ItemsAggregateArgs>

export const ItemsGroupByArgsSchema: z.ZodType<Prisma.ItemsGroupByArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
  orderBy: z.union([ ItemsOrderByWithAggregationInputSchema.array(),ItemsOrderByWithAggregationInputSchema ]).optional(),
  by: ItemsScalarFieldEnumSchema.array(),
  having: ItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.ItemsGroupByArgs>

export const ItemsFindUniqueArgsSchema: z.ZodType<Prisma.ItemsFindUniqueArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ItemsFindUniqueArgs>

export const ItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemsFindUniqueOrThrowArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ItemsFindUniqueOrThrowArgs>

export const OrdersFindFirstArgsSchema: z.ZodType<Prisma.OrdersFindFirstArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereInputSchema.optional(),
  orderBy: z.union([ OrdersOrderByWithRelationInputSchema.array(),OrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: OrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrdersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.OrdersFindFirstArgs>

export const OrdersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OrdersFindFirstOrThrowArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereInputSchema.optional(),
  orderBy: z.union([ OrdersOrderByWithRelationInputSchema.array(),OrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: OrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrdersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.OrdersFindFirstOrThrowArgs>

export const OrdersFindManyArgsSchema: z.ZodType<Prisma.OrdersFindManyArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereInputSchema.optional(),
  orderBy: z.union([ OrdersOrderByWithRelationInputSchema.array(),OrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: OrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: OrdersScalarFieldEnumSchema.array().optional(),
}).strict() as z.ZodType<Prisma.OrdersFindManyArgs>

export const OrdersAggregateArgsSchema: z.ZodType<Prisma.OrdersAggregateArgs> = z.object({
  where: OrdersWhereInputSchema.optional(),
  orderBy: z.union([ OrdersOrderByWithRelationInputSchema.array(),OrdersOrderByWithRelationInputSchema ]).optional(),
  cursor: OrdersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.OrdersAggregateArgs>

export const OrdersGroupByArgsSchema: z.ZodType<Prisma.OrdersGroupByArgs> = z.object({
  where: OrdersWhereInputSchema.optional(),
  orderBy: z.union([ OrdersOrderByWithAggregationInputSchema.array(),OrdersOrderByWithAggregationInputSchema ]).optional(),
  by: OrdersScalarFieldEnumSchema.array(),
  having: OrdersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() as z.ZodType<Prisma.OrdersGroupByArgs>

export const OrdersFindUniqueArgsSchema: z.ZodType<Prisma.OrdersFindUniqueArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OrdersFindUniqueArgs>

export const OrdersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OrdersFindUniqueOrThrowArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OrdersFindUniqueOrThrowArgs>

export const Basket_itemsCreateArgsSchema: z.ZodType<Prisma.Basket_itemsCreateArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  data: z.union([ Basket_itemsCreateInputSchema,Basket_itemsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.Basket_itemsCreateArgs>

export const Basket_itemsUpsertArgsSchema: z.ZodType<Prisma.Basket_itemsUpsertArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereUniqueInputSchema,
  create: z.union([ Basket_itemsCreateInputSchema,Basket_itemsUncheckedCreateInputSchema ]),
  update: z.union([ Basket_itemsUpdateInputSchema,Basket_itemsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.Basket_itemsUpsertArgs>

export const Basket_itemsCreateManyArgsSchema: z.ZodType<Prisma.Basket_itemsCreateManyArgs> = z.object({
  data: Basket_itemsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsCreateManyArgs>

export const Basket_itemsDeleteArgsSchema: z.ZodType<Prisma.Basket_itemsDeleteArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  where: Basket_itemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Basket_itemsDeleteArgs>

export const Basket_itemsUpdateArgsSchema: z.ZodType<Prisma.Basket_itemsUpdateArgs> = z.object({
  select: Basket_itemsSelectSchema.optional(),
  include: Basket_itemsIncludeSchema.optional(),
  data: z.union([ Basket_itemsUpdateInputSchema,Basket_itemsUncheckedUpdateInputSchema ]),
  where: Basket_itemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.Basket_itemsUpdateArgs>

export const Basket_itemsUpdateManyArgsSchema: z.ZodType<Prisma.Basket_itemsUpdateManyArgs> = z.object({
  data: z.union([ Basket_itemsUpdateManyMutationInputSchema,Basket_itemsUncheckedUpdateManyInputSchema ]),
  where: Basket_itemsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsUpdateManyArgs>

export const Basket_itemsDeleteManyArgsSchema: z.ZodType<Prisma.Basket_itemsDeleteManyArgs> = z.object({
  where: Basket_itemsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.Basket_itemsDeleteManyArgs>

export const ItemsCreateArgsSchema: z.ZodType<Prisma.ItemsCreateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  data: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.ItemsCreateArgs>

export const ItemsUpsertArgsSchema: z.ZodType<Prisma.ItemsUpsertArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
  create: z.union([ ItemsCreateInputSchema,ItemsUncheckedCreateInputSchema ]),
  update: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.ItemsUpsertArgs>

export const ItemsCreateManyArgsSchema: z.ZodType<Prisma.ItemsCreateManyArgs> = z.object({
  data: ItemsCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.ItemsCreateManyArgs>

export const ItemsDeleteArgsSchema: z.ZodType<Prisma.ItemsDeleteArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  where: ItemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ItemsDeleteArgs>

export const ItemsUpdateArgsSchema: z.ZodType<Prisma.ItemsUpdateArgs> = z.object({
  select: ItemsSelectSchema.optional(),
  include: ItemsIncludeSchema.optional(),
  data: z.union([ ItemsUpdateInputSchema,ItemsUncheckedUpdateInputSchema ]),
  where: ItemsWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.ItemsUpdateArgs>

export const ItemsUpdateManyArgsSchema: z.ZodType<Prisma.ItemsUpdateManyArgs> = z.object({
  data: z.union([ ItemsUpdateManyMutationInputSchema,ItemsUncheckedUpdateManyInputSchema ]),
  where: ItemsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ItemsUpdateManyArgs>

export const ItemsDeleteManyArgsSchema: z.ZodType<Prisma.ItemsDeleteManyArgs> = z.object({
  where: ItemsWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.ItemsDeleteManyArgs>

export const OrdersCreateArgsSchema: z.ZodType<Prisma.OrdersCreateArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  data: z.union([ OrdersCreateInputSchema,OrdersUncheckedCreateInputSchema ]),
}).strict() as z.ZodType<Prisma.OrdersCreateArgs>

export const OrdersUpsertArgsSchema: z.ZodType<Prisma.OrdersUpsertArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereUniqueInputSchema,
  create: z.union([ OrdersCreateInputSchema,OrdersUncheckedCreateInputSchema ]),
  update: z.union([ OrdersUpdateInputSchema,OrdersUncheckedUpdateInputSchema ]),
}).strict() as z.ZodType<Prisma.OrdersUpsertArgs>

export const OrdersCreateManyArgsSchema: z.ZodType<Prisma.OrdersCreateManyArgs> = z.object({
  data: OrdersCreateManyInputSchema.array(),
  skipDuplicates: z.boolean().optional(),
}).strict() as z.ZodType<Prisma.OrdersCreateManyArgs>

export const OrdersDeleteArgsSchema: z.ZodType<Prisma.OrdersDeleteArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  where: OrdersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OrdersDeleteArgs>

export const OrdersUpdateArgsSchema: z.ZodType<Prisma.OrdersUpdateArgs> = z.object({
  select: OrdersSelectSchema.optional(),
  include: OrdersIncludeSchema.optional(),
  data: z.union([ OrdersUpdateInputSchema,OrdersUncheckedUpdateInputSchema ]),
  where: OrdersWhereUniqueInputSchema,
}).strict() as z.ZodType<Prisma.OrdersUpdateArgs>

export const OrdersUpdateManyArgsSchema: z.ZodType<Prisma.OrdersUpdateManyArgs> = z.object({
  data: z.union([ OrdersUpdateManyMutationInputSchema,OrdersUncheckedUpdateManyInputSchema ]),
  where: OrdersWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.OrdersUpdateManyArgs>

export const OrdersDeleteManyArgsSchema: z.ZodType<Prisma.OrdersDeleteManyArgs> = z.object({
  where: OrdersWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.OrdersDeleteManyArgs>

interface Basket_itemsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.Basket_itemsArgs
  readonly type: Prisma.Basket_itemsGetPayload<this['_A']>
}

interface ItemsGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.ItemsArgs
  readonly type: Prisma.ItemsGetPayload<this['_A']>
}

interface OrdersGetPayload extends HKT {
  readonly _A?: boolean | null | undefined | Prisma.OrdersArgs
  readonly type: Prisma.OrdersGetPayload<this['_A']>
}

export const tableSchemas = {
  basket_items: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "item_id",
        "UUID"
      ],
      [
        "quantity",
        "INT4"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ],
      [
        "order_id",
        "UUID"
      ],
      [
        "purchased_price",
        "INT4"
      ]
    ]),
    relations: [
      new Relation("items", "item_id", "id", "items", "Basket_itemsToItems", "one"),
      new Relation("orders", "order_id", "id", "orders", "Basket_itemsToOrders", "one"),
    ],
    modelSchema: (Basket_itemsCreateInputSchema as any)
      .partial()
      .or((Basket_itemsUncheckedCreateInputSchema as any).partial()),
    createSchema: Basket_itemsCreateArgsSchema,
    createManySchema: Basket_itemsCreateManyArgsSchema,
    findUniqueSchema: Basket_itemsFindUniqueArgsSchema,
    findSchema: Basket_itemsFindFirstArgsSchema,
    updateSchema: Basket_itemsUpdateArgsSchema,
    updateManySchema: Basket_itemsUpdateManyArgsSchema,
    upsertSchema: Basket_itemsUpsertArgsSchema,
    deleteSchema: Basket_itemsDeleteArgsSchema,
    deleteManySchema: Basket_itemsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof Basket_itemsCreateInputSchema>,
    Prisma.Basket_itemsCreateArgs['data'],
    Prisma.Basket_itemsUpdateArgs['data'],
    Prisma.Basket_itemsFindFirstArgs['select'],
    Prisma.Basket_itemsFindFirstArgs['where'],
    Prisma.Basket_itemsFindUniqueArgs['where'],
    Omit<Prisma.Basket_itemsInclude, '_count'>,
    Prisma.Basket_itemsFindFirstArgs['orderBy'],
    Prisma.Basket_itemsScalarFieldEnum,
    Basket_itemsGetPayload
  >,
  items: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "slug",
        "TEXT"
      ],
      [
        "name",
        "TEXT"
      ],
      [
        "price",
        "INT4"
      ],
      [
        "description",
        "TEXT"
      ]
    ]),
    relations: [
      new Relation("basket_items", "", "", "basket_items", "Basket_itemsToItems", "many"),
    ],
    modelSchema: (ItemsCreateInputSchema as any)
      .partial()
      .or((ItemsUncheckedCreateInputSchema as any).partial()),
    createSchema: ItemsCreateArgsSchema,
    createManySchema: ItemsCreateManyArgsSchema,
    findUniqueSchema: ItemsFindUniqueArgsSchema,
    findSchema: ItemsFindFirstArgsSchema,
    updateSchema: ItemsUpdateArgsSchema,
    updateManySchema: ItemsUpdateManyArgsSchema,
    upsertSchema: ItemsUpsertArgsSchema,
    deleteSchema: ItemsDeleteArgsSchema,
    deleteManySchema: ItemsDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof ItemsCreateInputSchema>,
    Prisma.ItemsCreateArgs['data'],
    Prisma.ItemsUpdateArgs['data'],
    Prisma.ItemsFindFirstArgs['select'],
    Prisma.ItemsFindFirstArgs['where'],
    Prisma.ItemsFindUniqueArgs['where'],
    Omit<Prisma.ItemsInclude, '_count'>,
    Prisma.ItemsFindFirstArgs['orderBy'],
    Prisma.ItemsScalarFieldEnum,
    ItemsGetPayload
  >,
  orders: {
    fields: new Map([
      [
        "id",
        "UUID"
      ],
      [
        "recipient_name",
        "TEXT"
      ],
      [
        "delivery_address",
        "TEXT"
      ],
      [
        "delivery_postcode",
        "TEXT"
      ],
      [
        "delivery_country",
        "TEXT"
      ],
      [
        "delivery_price",
        "INT4"
      ],
      [
        "status",
        "TEXT"
      ],
      [
        "created_at",
        "TIMESTAMP"
      ]
    ]),
    relations: [
      new Relation("basket_items", "", "", "basket_items", "Basket_itemsToOrders", "many"),
    ],
    modelSchema: (OrdersCreateInputSchema as any)
      .partial()
      .or((OrdersUncheckedCreateInputSchema as any).partial()),
    createSchema: OrdersCreateArgsSchema,
    createManySchema: OrdersCreateManyArgsSchema,
    findUniqueSchema: OrdersFindUniqueArgsSchema,
    findSchema: OrdersFindFirstArgsSchema,
    updateSchema: OrdersUpdateArgsSchema,
    updateManySchema: OrdersUpdateManyArgsSchema,
    upsertSchema: OrdersUpsertArgsSchema,
    deleteSchema: OrdersDeleteArgsSchema,
    deleteManySchema: OrdersDeleteManyArgsSchema
  } as TableSchema<
    z.infer<typeof OrdersCreateInputSchema>,
    Prisma.OrdersCreateArgs['data'],
    Prisma.OrdersUpdateArgs['data'],
    Prisma.OrdersFindFirstArgs['select'],
    Prisma.OrdersFindFirstArgs['where'],
    Prisma.OrdersFindUniqueArgs['where'],
    Omit<Prisma.OrdersInclude, '_count'>,
    Prisma.OrdersFindFirstArgs['orderBy'],
    Prisma.OrdersScalarFieldEnum,
    OrdersGetPayload
  >,
}

export const schema = new DbSchema(tableSchemas, migrations)
export type Electric = ElectricClient<typeof schema>
