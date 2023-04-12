import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerClick = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Click, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly count?: number | null;
  readonly browserId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClick = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Click, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly count?: number | null;
  readonly browserId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Click = LazyLoading extends LazyLoadingDisabled ? EagerClick : LazyClick

export declare const Click: (new (init: ModelInit<Click>) => Click) & {
  copyOf(source: Click, mutator: (draft: MutableModel<Click>) => MutableModel<Click> | void): Click;
}