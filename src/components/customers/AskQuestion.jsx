import { Button, Label, Textarea } from 'flowbite-react';

const AskQuestion = () => {
  return (
    <section className="flex justify-center p-20">
      <div className="max-w-md w-full">
        <div className="mb-2 block">
          <Label htmlFor="question" value="Your question" />
        </div>
        <Textarea id="question" placeholder="Leave a question..." required rows={4} />
        <div className="py-5">
          <Button type="button">Submit</Button>
        </div>
      </div>
    </section>
  );
}
export default AskQuestion;
