import { UserGroup, StampPalette, Channel } from '@traptitech/traq'
import { UserGroupId, StampPaletteId, ChannelId } from '@/types/entity-ids'
import {
  MessageMap,
  Undefinedable,
  DMChannelMap,
  WebhookMap,
  FileMetaDataMap,
  TagMap,
  ClipFolderMap,
  StampMap,
  OgpDataMap
} from '.'

export type S = {
  messages: Undefinedable<MessageMap>
  channels: Record<ChannelId, Channel>
  dmChannels: DMChannelMap
  userGroups: Record<UserGroupId, UserGroup>
  stamps: Undefinedable<StampMap>
  stampPalettes: Record<StampPaletteId, StampPalette>
  webhooks: Undefinedable<WebhookMap>
  fileMetaData: Undefinedable<FileMetaDataMap>
  tags: Undefinedable<TagMap>
  clipFolders: Undefinedable<ClipFolderMap>
  ogpData: Undefinedable<OgpDataMap>
}

export const state: S = {
  messages: {},
  channels: {},
  dmChannels: {},
  userGroups: {},
  stamps: {},
  stampPalettes: {},
  webhooks: {},
  fileMetaData: {},
  tags: {},
  clipFolders: {},
  ogpData: {}
}
