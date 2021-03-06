/*** AUTOGENERATED FILE: you can only modify parts of the file within <keep-*> tags ***/
// tslint:disable max-line-length no-duplicate-imports
import { Field, ID, ObjectType } from 'type-graphql';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Post } from './Post';
import { User } from './User';

import { asPromise } from '../../utils/as-promise';
import * as auth from '../../utils/auth/auth-checkers';
import { IAuthorizable } from '../../utils/auth/IAuthorizable';
import { getInputOperationType } from '../../utils/get-input-operation-type';
import { noChange } from '../../utils/no-change';
import { VoteAuth } from '../auth/VoteAuth';
import { EntityId, EntityIdScalar } from '../EntityId';
import { VoteCreateInput } from '../inputs/VoteCreateInput';
import { VoteEditInput } from '../inputs/VoteEditInput';
import { VoteNestedInput } from '../inputs/VoteNestedInput';
import { IRequestContext } from '../IRequestContext';
import { updatePostRelation } from './update-operations/vote-update-operations';

// <keep-imports>
// </keep-imports>

// <keep-decorators>
// </keep-decorators>
@Entity()
@ObjectType()
export class Vote implements IAuthorizable {
  @Field(() => EntityIdScalar)
  @PrimaryGeneratedColumn()
  public id: EntityId;

  public authorizationChecker = new VoteAuth(this);

  @Field(() => Number)
  @Column({type: 'integer',
    // <custom-column-args>
    // </custom-column-args>
  })
  public sentiment: number;

  @ManyToOne(() => Post, (post) => post.votes , { nullable: false, onDelete: 'CASCADE' })
  @Field(() => Post , { nullable: false })
  public post: Promise<Post>;

  @ManyToOne(() => User, (user) => user.votes , { nullable: false, onDelete: 'CASCADE' })
  @Field(() => User , { nullable: false })
  public author: Promise<User>;

  @CreateDateColumn()
  @Field()
  public createdAt: Date;

  @UpdateDateColumn()
  @Field()
  public updatedAt: Date;

  public async update(input: VoteCreateInput | VoteEditInput | VoteNestedInput, context: IRequestContext) {
    const { post, ...data } = input;
    if (noChange(input)) {
      return this;
    }
    if (getInputOperationType(this, input) === 'update') {
      await auth.assertCanUpdate(this, context);
    }
    Object.assign(this, data);

    if (getInputOperationType(this, input) === 'create') {
      this.author = asPromise(await this.author || await context.user);
    }
    await updatePostRelation(this, post, context);

    context.modelsToSave.push(this);

    // <keep-update-code>
    // </keep-update-code>
    await auth.assertCanPersist(this, context);

    return this;
  }

  // <keep-methods>
  // </keep-methods>
}
