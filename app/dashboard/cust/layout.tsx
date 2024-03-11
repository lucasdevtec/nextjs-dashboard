import StyledComponentsRegistry from '@/app/lib/registry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
}
