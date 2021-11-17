import { useRef } from "react";

const [Name, setName] = useState(
    {
        first:'Yera',
        last:'lee'
    }
);

const firstNameRef = useRef();
const lastNameRef = useRef();
const {first, last} = Name;

const confirm = () => {
    setName(
        {
            first:firstNameRef.current.value,
            last:lastNameRef.current.value
        }
    )
}

