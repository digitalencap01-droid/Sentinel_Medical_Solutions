import { SentinelSite } from "../site";

export default async function RoutedPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return <SentinelSite path={`/${slug.join("/")}`} />;
}
