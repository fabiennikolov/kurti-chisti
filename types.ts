export type UnoCssString = `i-${string}`

export interface SocialLink {
  to: string
  icon?: string
}

export interface CardProps {
  title: string
  description?: string
  image: string
  link: {
    redirect: string
  }
}
