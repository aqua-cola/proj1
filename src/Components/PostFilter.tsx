import React, {Dispatch, SetStateAction} from "react";
import { FilterType, OptionsType } from "../pages/Posts";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

type PostFilterType = {
    filter: FilterType
    setFilter: Dispatch<SetStateAction<FilterType>>
}

export const PostFilter = ({filter, setFilter}: PostFilterType) => {

    const sortPosts = (event: string) => {
        setFilter({...filter, sort: event});
    }

    const searchQuery = (event: any) => {
        setFilter({...filter, query: event.target.value});
    }

    const OptionsArray: OptionsType[] = [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
    ]

    return (
        <div>
            <MyInput
                placeholder='Поиск...'
                type='text'
                value={filter.query}
                onChange={searchQuery}
            />
            <MySelect
                defaultValue='Сортировка'
                options={OptionsArray}
                value={filter.sort}
                onChange={sortPosts}
            />
        </div>
    )
}