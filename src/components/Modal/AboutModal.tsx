
import Modal from "./Modal";

interface AboutModalProps {
    isOpen: boolean; 
    onClose: ()=> void
}

const AboutModal = ({ isOpen, onClose } : AboutModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="text-gray-800 font-normal">
                <h2 className="text-2xl underline font-bold my-2">About Dosvid</h2>
                <p className="text-md">
                    <strong>Dosvid</strong> is an application for structuring your personal development.<br/>

                    <span className="bg-forest text-white  px-3 py-1 my-2 rounded-2xl inline-block">A powerful and flexible tool for levelling up.</span><br/>

                    <i className="underline underline-offset-2">Dosvid</i> literally means "experience" in Ukrainian. 
                    That is what the core of the system is all about - gaining experience from your goals to unlock your planned out rewards.  

                </p>
                <h2 className="text-2xl underline font-bold my-2">About the stack</h2>
                <p className="text-md">
                <span className="bg-forest text-white  px-2 py-1 rounded-2xl inline-block">This frontend-only Single Page Application uses Vite, Typescript, <strong>React.js</strong>, and Tailwind CSS.</span><br/>
                    
                    The core of the app is done in React and Typescript, using context and a reducer to manage state. 
                    Animations were done in CSS via Tailwind.<br/>
                    This app uses browser local storage for persistent data between sessions, and this app is hosted on Netlify.<br/>
                    
                </p>
                <p>check out the code on github: <a href='https://github.com/Antoniolifer/dosvid' target='_blank'className="text-forest underline font-bold underline-offset-3 cursor-pointer wrap-break-word">https://github.com/Antoniolifer/dosvid</a></p>
                <h2 className="text-2xl underline font-bold my-2">About the author</h2>
                <p className="text-md">
                <span className="bg-forest text-white  px-2 py-1  rounded-2xl inline-block">My name is Anton Serdiuk and I am a <strong>Javascript/React.js</strong> web developer from Perth, WA.</span><br/>
                    I have created this app for getting firsthand experience in complex project architecture, combining typescript, my own implementation of a global store(useContext x useReducer), and highly interconnected app logic. 
                    <br/>
                    It was greatly exciting to produce a self-sufficient and complex system, something that provides a <i>unique kind of structure</i>, something more than just a glorified todo list.
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