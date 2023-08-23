import { Section } from '@/app/types';
import Link from 'next/link';
export default function ScrollerSection({
  id,
  title,
  content,
  sections,
}: {
  title: string;
  id: string;
  content;
  sections: any[];
}) {
  return (
    <section id={id} className="scroller__section">
      {content}
    </section>
  );
}
