import { Label, TextInput } from "flowbite-react";

const Questions = () => (
  <section>
    <div>
      <div className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="input-gray" color="gray" value="Search questions" />
          </div>
          <TextInput id="input-gray" placeholder="Search" required color="gray" />
        </div>
      </div>
    </div>
    <div>
      Items Appear here.
      <ul>
        <li>One</li>
      </ul>
    </div>
  </section>
);
export default Questions;