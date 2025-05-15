import { useLoader } from "./LoaderContext";

function Loader() {
    const { isLoading } = useLoader();

    if (!isLoading) return null;

}

export default Loader;