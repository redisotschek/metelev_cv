import { Section } from '@/app/types';
import Link from 'next/link';

function getSideSections(sections: Section[], id: string) {
  const index = sections.findIndex((value) => value.id === id);
  const sideSections: Section[] = [];
  if (index > 0) {
    sideSections.push(sections[index - 1]);
  }
  if (index < sections.length - 1) {
    sideSections.push(sections[index + 1]);
  }
  return sideSections;
}

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
  const sideSections = getSideSections(sections, id);
  return (
    <section id={id} className="scroller__section">
      {content}
      {/* {sideSections.map((section: any) => {
        return (
          <div key={section.id}>
            <Link href={`#${section.id}`}>
              <span>{section.title}</span>
            </Link>
          </div>
        );
      })} */}
    </section>
  );
}
