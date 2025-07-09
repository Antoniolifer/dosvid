import Modal from "./Modal";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-gray-800 font-normal">
        <h2 className="text-2xl underline font-bold my-2">About Dosvid</h2>
        <p className="text-md">
          <span className="bg-forest text-white text-center px-10 py-2  my-2 rounded-2xl inline-block">
            <i>Dosvid</i> is a goal planner for structuring development and
            enhancing it with a reward system.
            <br />A powerful and flexible tool for levelling up.
          </span>
          <br />
          It was developed using <strong>React</strong> (with native React
          Context & Reducer), <strong>Typescript</strong>, and{" "}
          <strong>Tailwind</strong>.
          <br />
          <br />
          My name is Anton Serdiuk and I am a Javascript & React developer from
          Perth, WA.
          <br />
          <br />
          Check out my code and read about this project's development on the{" "}
          <a
            href="https://github.com/Antoniolifer/dosvid"
            target="_blank"
            className="text-forest underline font-bold underline-offset-3 cursor-pointer w-5"
          >
            github repo
          </a>
          .
        </p>
        <br />
        <p className="text-lg italic font-thin ">
          I have created this app for getting firsthand experience in complex
          project architecture, combining typescript, my own implementation of a
          global store(useContext x useReducer), and highly interconnected app
          logic.
          <br />
          It was greatly exciting to produce a self-sufficient and complex
          system, something that provides a <i>unique kind of structure</i>,
          something more than just a glorified todo list.
        </p>

        <button
          className="mt-4 px-4 py-2
                            bg-fern text-white
                            hover:bg-forest
                            transition-all duration-300
                            rounded-lg
                            block mx-auto
                            font-bold
                            border-2 border-white
                            cursor-pointer
                            hover:shadow-lg
                            shadow-md shadow-lime/25"
          onClick={onClose}
        >
          Thank you for checking out Dosvid!
        </button>
      </div>
    </Modal>
  );
};

export default AboutModal;
