import type { Session, User } from 'lucia'
import { atom } from 'nanostores'

export const $user = atom<User | null>(null)
export const $session = atom<Session | null>(null)