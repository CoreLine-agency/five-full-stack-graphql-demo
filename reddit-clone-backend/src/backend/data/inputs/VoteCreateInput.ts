/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
import { Field, ID, InputType } from 'type-graphql';

import { EntityId, EntityIdScalar } from '../EntityId';

import { PostNestedInput } from './PostNestedInput';

// <keep-imports>
// </keep-imports>

@InputType()
export class VoteCreateInput {
  @Field(() => Number)
  public sentiment: number;

  @Field(() => PostNestedInput)
  public post: PostNestedInput;

  // <keep-methods>
  // </keep-methods>
}
