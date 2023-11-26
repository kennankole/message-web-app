import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuestionsAsync } from "../../features/questions/questionSlice";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Questions = () => {
  const user = useSelector((state) => state.auth.user)
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const questions = useSelector((state) => state.questions.questions);
  const unAnsweredQuestions = questions.filter((question) => question.question.answer === null);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questions.filter((question) =>
    question.question.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestionsAsync())
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const highlightText = (text, query) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <span key={index} className="highlight" >
        {part}
      </span> : part
    )
  }

  return (
    <section>
      <div>
        <div className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="input-gray" color="gray" value="Search questions" />
            </div>
            <TextInput
              id="input-gray"
              placeholder="Search"
              required
              color="gray"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </div>
      <div>
        <ul>
          {filteredQuestions.map((item) => (
            <div key={item.question.id} className="p-2">
              <p className="py-2" color="red">
                {highlightText(item.question.body, searchQuery)}
              </p>
              {item.question.answer ? (
                <div className="p-3">
                  <p>Answer will appear here</p>
                </div>
              ) : (
                <div>

                  {user.user_identity.startsWith("AG") && loggedIn ? (
                    <Button type="button">
                      <Link to="/agent/answer">
                        Leave an answer
                      </Link>
                    </Button>
                  ) : (
                    <h3>
                      This question has not been answered yet
                    </h3>
                  )}

                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </section>
  )

};
export default Questions;