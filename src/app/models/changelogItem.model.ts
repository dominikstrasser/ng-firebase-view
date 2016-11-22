import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

interface ChangelogItem {
  op: string,
  path: string,
  value: Object
}

export interface ChangelogItemRecord extends TypedRecord<ChangelogItemRecord>, ChangelogItem { }

const defaultChangelogItem: ChangelogItem = {
  op: null,
  path: null,
  value: null
};

export const ChangelogItemFactory = makeTypedFactory<ChangelogItem, ChangelogItemRecord>(defaultChangelogItem);
