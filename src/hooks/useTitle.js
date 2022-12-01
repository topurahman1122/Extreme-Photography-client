import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ExPhotography`;
    }, [title])
}

export default useTitle;