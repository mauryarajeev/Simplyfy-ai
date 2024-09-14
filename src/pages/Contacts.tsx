import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import notfound from "../assets/notFound.svg";
import { useSelector } from "react-redux";
import { FaUserPlus } from "react-icons/fa";

const Contacts = () => {
  // Use selector to access contacts state from Redux store
  const contacts = useSelector((state: any) => state.contacts);
  
  // Hook to programmatically navigate to different routes
  const navigate = useNavigate();
  
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-[1190px] w-full">
        {/* Button to navigate to the 'Create Contact' page */}
        <p className="text-center text-primary text-base mt-5 tracking-widest">
          <div className="flex justify-center items-center ">
            <Button
              text="Create Contact"
              onClick={() => {
                navigate("/contacts/create");
              }}
              variant="default"
              icon={<FaUserPlus className="w-5 h-5" />}
            />
          </div>
        </p>

        {/* Conditional rendering based on whether contacts are available */}
        <div className="flex flex-col justify-center items-center lg:m-0 m-5">
          {contacts?.items?.length > 0 ? (
            // Render a grid of Card components if contacts are available
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 ">
              {contacts.items?.map((item: any) => (
                <Card
                  details={item}
                  key={item?.id}
                />
              ))}
            </div>
          ) : (
            // Render a 'No contacts found' message if no contacts are available
            <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center text-center">
                <img className="w-14 h-14 sm:w-20 sm:h-20" src={notfound} alt="Not found" />
                <div className="mx-auto max-w-lg px-4 py-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                    No contacts found!
                  </h1>
                  <p className="mt-4 text-gray-500 text-base sm:text-lg">
                    Please add contact from the Create Contact Button
                  </p>
                  {/* Button to navigate to the 'Create Contact' page */}
                  <div className="flex justify-center items-center ">
                    <Button
                      text="Create Contact"
                      onClick={() => {
                        navigate("/contacts/create");
                      }}
                      variant="default"
                      icon={<FaUserPlus className="w-5 h-5" />}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
