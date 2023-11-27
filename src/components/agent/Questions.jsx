import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentUserAsync } from "../../features/authentication/authenticationSlice";
import { getAllQuestionsAsync } from "../../features/questions/questionSlice";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

const Questions = () => {
  const user = useSelector((state) => state.auth.user)

  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const questions = useSelector((state) => state.questions.questions);
  console.log(questions);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = (questions || []).filter((question) =>
    question && question.question && question.question.body &&
    question.question.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuestionsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(currentUserAsync())
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
              <Label htmlFor="input-gray" color="gray" value="Search questions to answer" />
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
          {user && filteredQuestions.map((item) => (
            <div key={item.question.id} className="p-2">
              <p className="py-2" color="red">
                {highlightText(item.question.body, searchQuery)}
              </p>
              <div>
                {user && user.user_identity.startsWith("AG") && loggedIn && (
                  <Button type="button">
                    <Link to={`/agent/question-detail/${item.question.id}`}>
                      View Details
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )

};
export default Questions;