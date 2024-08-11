const responses = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    message: "Why do we fall? So we can learn to pick ourselves up.",
  },
  {
    id: 2,
    name: "Mark",
    email: "mark@example.com",
    message:
      "How can you move faster than possible, fight longer than possible without the most powerful impulse of the spirit: the fear of death?",
  },
];

export default function ResponsesPage() {
  return (
    <div className="flex flex-col justify-center items-center border-2 gap-5 rounded-md p-6">
      <h2 className="text-2xl font-bold text-center">Responses</h2>
      {responses.length > 0 ? (
        <ul className="space-y-4">
          {responses.map(response => (
            <li
              key={response.id}
              className="bg-gray-50 border border-gray-300 rounded relative"
            >
              <div className="p-4">
                <p className="font-semibold mb-1">{response.name}</p>
                <p className="text-gray-600 text-sm mb-2">{response.email}</p>
                <p className="text-gray-800">{response.message}</p>
              </div>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1 font-bold"
                aria-label="Remove response"
              >
                &#x2715;
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 py-4">No responses yet.</p>
      )}
    </div>
  );
}
