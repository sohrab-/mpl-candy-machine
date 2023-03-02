/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  checkForIsWritableOverride as isWritable,
  mapSerializer,
} from '@metaplex-foundation/umi';

// Accounts.
export type InitializeCandyGuardInstructionAccounts = {
  candyGuard: PublicKey;
  base: Signer;
  authority?: PublicKey;
  payer?: Signer;
  systemProgram?: PublicKey;
};

// Arguments.
export type InitializeCandyGuardInstructionData = {
  discriminator: Array<number>;
  data: Uint8Array;
};

export type InitializeCandyGuardInstructionDataArgs = { data: Uint8Array };

export function getInitializeCandyGuardInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  InitializeCandyGuardInstructionDataArgs,
  InitializeCandyGuardInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    InitializeCandyGuardInstructionDataArgs,
    InitializeCandyGuardInstructionData,
    InitializeCandyGuardInstructionData
  >(
    s.struct<InitializeCandyGuardInstructionData>(
      [
        ['discriminator', s.array(s.u8(), { size: 8 })],
        ['data', s.bytes()],
      ],
      { description: 'InitializeCandyGuardInstructionData' }
    ),
    (value) =>
      ({
        ...value,
        discriminator: [175, 175, 109, 31, 13, 152, 155, 237],
      } as InitializeCandyGuardInstructionData)
  ) as Serializer<
    InitializeCandyGuardInstructionDataArgs,
    InitializeCandyGuardInstructionData
  >;
}

// Instruction.
export function initializeCandyGuard(
  context: Pick<Context, 'serializer' | 'programs' | 'identity' | 'payer'>,
  input: InitializeCandyGuardInstructionAccounts &
    InitializeCandyGuardInstructionDataArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = context.programs.get('mplCandyGuard').publicKey;

  // Resolved accounts.
  const candyGuardAccount = input.candyGuard;
  const baseAccount = input.base;
  const authorityAccount = input.authority ?? context.identity.publicKey;
  const payerAccount = input.payer ?? context.payer;
  const systemProgramAccount = input.systemProgram ?? {
    ...context.programs.get('splSystem').publicKey,
    isWritable: false,
  };

  // Candy Guard.
  keys.push({
    pubkey: candyGuardAccount,
    isSigner: false,
    isWritable: isWritable(candyGuardAccount, true),
  });

  // Base.
  signers.push(baseAccount);
  keys.push({
    pubkey: baseAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(baseAccount, false),
  });

  // Authority.
  keys.push({
    pubkey: authorityAccount,
    isSigner: false,
    isWritable: isWritable(authorityAccount, false),
  });

  // Payer.
  signers.push(payerAccount);
  keys.push({
    pubkey: payerAccount.publicKey,
    isSigner: true,
    isWritable: isWritable(payerAccount, true),
  });

  // System Program.
  keys.push({
    pubkey: systemProgramAccount,
    isSigner: false,
    isWritable: isWritable(systemProgramAccount, false),
  });

  // Data.
  const data =
    getInitializeCandyGuardInstructionDataSerializer(context).serialize(input);

  // Bytes Created On Chain.
  const bytesCreatedOnChain = 0;

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain,
  };
}