import dynamic from 'next/dynamic'

const UnderConstructionNoSSR = dynamic(() => import('../pages/underconstruction'), {
  ssr: false
})

export default function Home() {
  return (
    <UnderConstructionNoSSR />
  )
}
