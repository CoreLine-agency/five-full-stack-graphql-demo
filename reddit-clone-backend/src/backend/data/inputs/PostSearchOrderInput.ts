/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

import { SortOrderEnum } from '../SortOrderEnum';

// <keep-imports>
// </keep-imports>

@InputType()
export class PostSearchOrderInput {
  @Field(() => SortOrderEnum, { nullable: true })
  public id?: SortOrderEnum;

  @Field(() => SortOrderEnum, { nullable: true })
  public text?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public title?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public author?: SortOrderEnum | null;

  @Field(() => SortOrderEnum, { nullable: true })
  public parentPost?: SortOrderEnum | null;

  // <keep-methods>
  // </keep-methods>
}
