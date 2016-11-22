import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';
import { ChangelogItemRecord } from './changelogItem.model';
import { List } from 'immutable';

export interface ChangelogGroup {
  date: number
  items: List<ChangelogItemRecord>
}

export interface ChangelogGroupRecord extends TypedRecord<ChangelogGroupRecord>, ChangelogGroup { }

const defaultChangelogGroup: ChangelogGroup = {
  date: new Date().getTime(),
  items: null
};

export const ChangelogGroupFactory = makeTypedFactory<ChangelogGroup, ChangelogGroupRecord>(defaultChangelogGroup);
