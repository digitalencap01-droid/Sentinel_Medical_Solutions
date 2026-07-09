import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export type Theme = 'light' | 'dark'

export type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export type CountUpProps = {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
}

export type Metric = {
  value?: number
  prefix?: string
  suffix?: string
  staticValue?: string
  label: string
}

export type CardItem = {
  title: string
  body: string
}

export type IconCardItem = CardItem & {
  icon: LucideIcon
}

export type LeadershipMember = {
  name: string
  designation: string
  bio: string
  photoUrl: string
  isPlaceholder?: boolean
}

export type AdvisoryBoardMember = {
  name: string
  background: string
  photoUrl: string
  isPlaceholder?: boolean
}

export type Client = {
  name: string
  logoUrl: string
  /** Relationship language must be approved by the client — do not populate without sign-off. */
  relationshipDescriptor?: string
}

export type PartnershipTrack = {
  title: string
  icon: LucideIcon
  items: string[]
}

export type MarketLocation = {
  country: string
  isHQ?: boolean
}

export type AfricaMarket = {
  country: string
  code: string
  body: string
}

export type RegionalOffice = {
  region: string
  addressLine: string
  isHQ?: boolean
  isPlaceholder?: boolean
}

export type EnquiryType = 'Buyer' | 'Partner' | 'Investor' | 'Tender / Procurement' | 'Other'

export type NavLink = {
  label: string
  href: string
}

export type PharmaCategory = {
  title: string
  medicines: string[]
}

export type OperatingStep = {
  title: string
  body: string
}
