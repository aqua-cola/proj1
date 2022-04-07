import React from "react";
import { usePaggination } from "../../../hooks/usePaggination";

type PaginationType = {
    totalPages: number
    page: number
    changePage: (page: number) => void
}

export const Pagination = ({totalPages, page, changePage}: PaginationType) => {

    let pagesArray = usePaggination(totalPages)

    return (
        <div className='page_wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page_current' : 'page'}>
                    {p}
                </span>
            )}
        </div>
    )

}