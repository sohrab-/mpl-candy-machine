/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

/**
 * Gaurd to specify the maximum number of mints in a guard set.
 *
 * List of accounts required:
 *
 * 0. `[writable]` Allocation tracker PDA. The PDA is derived
 * using the seed `["allocation", allocation id,
 * candy guard pubkey, candy machine pubkey]`.
 */

export type Allocation = {
  /** Unique identifier of the allocation. */
  id: number;
  /** The limit of the allocation. */
  limit: number;
};

export type AllocationArgs = Allocation;

export function getAllocationSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<AllocationArgs, Allocation> {
  const s = context.serializer;
  return s.struct<Allocation>(
    [
      ['id', s.u8()],
      ['limit', s.u32()],
    ],
    { description: 'Allocation' }
  ) as Serializer<AllocationArgs, Allocation>;
}
