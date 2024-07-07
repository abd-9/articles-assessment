import Accent from '@/components/Accent';

export default function ContentPlaceholder({
  msg = 'Sorry, not found :(',
}: {
  msg?: string;
}) {
  return (
    <h2 className='mt-8 text-center sm:col-span-2 xl:col-span-3'>
      <Accent>{msg}</Accent>
    </h2>
  );
}
