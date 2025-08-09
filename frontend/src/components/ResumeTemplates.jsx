export default function ResumeTemplate({ formData, template }) {
  const { personal, summary, education, experience, skills } = formData;

  const templates = {
    classic: (
      <div className="bg-white p-8 font-serif text-black">
        <h1 className="text-4xl font-bold">{personal.name}</h1>
        <p>{personal.email} | {personal.phone}</p>
        <p>{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-6">
            <h2 className="border-b-2 border-black font-bold text-lg mb-2">Summary</h2>
            <p>{summary}</p>
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            <h2 className="border-b-2 border-black font-bold text-lg mb-2">Education</h2>
            {education.map((ed, i) => (
              <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
            ))}
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            <h2 className="border-b-2 border-black font-bold text-lg mb-2">Experience</h2>
            {experience.map((ex, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{ex.title} - {ex.company}</p>
                <p className="text-sm italic">{ex.years}</p>
                <p>{ex.description}</p>
              </div>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="mt-4">
            <h2 className="border-b-2 border-black font-bold text-lg mb-2">Skills</h2>
            <p>{skills.join(", ")}</p>
          </section>
        )}
      </div>
    ),

    modern: (
      <div className="bg-gray-50 p-8 font-sans border-l-8 border-blue-500">
        <h1 className="text-3xl font-extrabold text-blue-700">{personal.name}</h1>
        <p className="text-blue-600">{personal.email} | {personal.phone}</p>
        <p className="text-blue-600">{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-4">
            <h2 className="uppercase text-sm font-bold text-blue-500">Summary</h2>
            <p>{summary}</p>
          </section>
        )}

        <div className="grid grid-cols-2 gap-4 mt-4">
          {education.length > 0 && (
            <section>
              <h2 className="uppercase text-sm font-bold text-blue-500">Education</h2>
              {education.map((ed, i) => (
                <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
              ))}
            </section>
          )}
          {skills.length > 0 && (
            <section>
              <h2 className="uppercase text-sm font-bold text-blue-500">Skills</h2>
              <ul className="list-disc list-inside">
                {skills.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </section>
          )}
        </div>

        {experience.length > 0 && (
          <section className="mt-4">
            <h2 className="uppercase text-sm font-bold text-blue-500">Experience</h2>
            {experience.map((ex, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{ex.title} - {ex.company}</p>
                <p className="text-sm text-blue-500">{ex.years}</p>
                <p>{ex.description}</p>
              </div>
            ))}
          </section>
        )}
      </div>
    ),

    minimal: (
      <div className="bg-white p-8 font-mono border-t-4 border-gray-600">
        <h1 className="text-2xl">{personal.name}</h1>
        <p className="text-sm">{personal.email} | {personal.phone}</p>
        <p className="text-sm">{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-4">
            <p>{summary}</p>
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            {education.map((ed, i) => (
              <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
            ))}
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            {experience.map((ex, i) => (
              <div key={i}>
                <p>{ex.title} - {ex.company}</p>
                <p className="text-xs">{ex.years}</p>
              </div>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="mt-4">
            <p>{skills.join(" | ")}</p>
          </section>
        )}
      </div>
    ),

    elegant: (
      <div className="bg-purple-50 p-8 font-serif border-b-4 border-purple-600">
        <h1 className="text-3xl font-bold text-purple-800">{personal.name}</h1>
        <p className="text-purple-700">{personal.email} | {personal.phone}</p>
        <p className="text-purple-700">{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-4 italic">
            <p>{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-purple-700">Experience</h2>
            {experience.map((ex, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{ex.title}</p>
                <p className="text-purple-600">{ex.company}</p>
                <p>{ex.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-purple-700">Education</h2>
            {education.map((ed, i) => (
              <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-purple-700">Skills</h2>
            <p>{skills.join(", ")}</p>
          </section>
        )}
      </div>
    ),

    bold: (
      <div className="bg-red-50 p-8 font-sans border-l-8 border-red-600">
        <h1 className="text-4xl font-extrabold text-red-800">{personal.name}</h1>
        <p className="text-red-600">{personal.email} | {personal.phone}</p>
        <p className="text-red-600">{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-4">
            <p className="font-bold">{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            <h2 className="text-red-700 font-bold">Experience</h2>
            {experience.map((ex, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{ex.title}</p>
                <p>{ex.company}</p>
                <p>{ex.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            <h2 className="text-red-700 font-bold">Education</h2>
            {education.map((ed, i) => (
              <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
            ))}
          </section>
        )}

        {skills.length > 0 && (
          <section className="mt-4">
            <h2 className="text-red-700 font-bold">Skills</h2>
            <p>{skills.join(" / ")}</p>
          </section>
        )}
      </div>
    ),

    creative: (
      <div className="bg-gradient-to-br from-pink-50 to-yellow-50 p-8 font-sans border-2 border-pink-300">
        <h1 className="text-3xl font-extrabold text-pink-700">{personal.name}</h1>
        <p>{personal.email} | {personal.phone}</p>
        <p>{personal.linkedin} | {personal.portfolio}</p>

        {summary && (
          <section className="mt-4">
            <p className="italic">{summary}</p>
          </section>
        )}

        {skills.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-pink-700">Skills</h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <li key={i} className="bg-pink-200 px-2 py-1 rounded">{s}</li>
              ))}
            </ul>
          </section>
        )}

        {experience.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-pink-700">Experience</h2>
            {experience.map((ex, i) => (
              <div key={i} className="mb-2">
                <p className="font-semibold">{ex.title}</p>
                <p>{ex.company}</p>
                <p>{ex.description}</p>
              </div>
            ))}
          </section>
        )}

        {education.length > 0 && (
          <section className="mt-4">
            <h2 className="font-bold text-pink-700">Education</h2>
            {education.map((ed, i) => (
              <p key={i}>{ed.degree} - {ed.school} ({ed.year})</p>
            ))}
          </section>
        )}
      </div>
    ),
  };

  return templates[template] || templates.classic;
}
