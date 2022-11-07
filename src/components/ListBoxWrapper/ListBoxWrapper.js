import { useState, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { useStore, actions } from '~/store';

function ListBoxWrapper({ data }) {
    const [state, dispatch] = useStore();
    const { filterForm } = state;
    const [selectedItem, setSelectedItem] = useState(filterForm[data.title.toLowerCase()]);
    const [down, setDown] = useState(true);

    const handleSetFilterForm = (key, value) => {
        dispatch(actions.setFilterForm(key, value));
    };

    return (
        <div>
            <Listbox value={selectedItem} onChange={setSelectedItem}>
                <Listbox.Button className="flex justify-between items-center relative outline-none py-1 pl-3 pr-1 mx-2 border border-slate-200 rounded-lg">
                    <p>{selectedItem.name || selectedItem}</p>
                    <span className="ml-2">
                        {down && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </span>
                    <Listbox.Options className="-right-2 top-10 rounded-lg p-1 absolute z-10 min-w-[10rem] bg-white shadow-[0_5px_24px_0_rgba(148,163,184,0.6)]">
                        {data.items.map((item) => (
                            <Listbox.Option
                                className="flex justify-between text-left p-2 rounded-lg text-md outline-none text-slate-500 hover:bg-slate-100 hover:text-sky-500 ease duration-200"
                                key={item.id}
                                value={item}
                                as={Fragment}
                                onClick={() => handleSetFilterForm(data.title.toLowerCase(), item.name)}
                            >
                                {({ active, selected }) => {
                                    return (
                                        <li
                                            className={`${
                                                active ? 'bg-sky-500 text-white' : 'bg-white text-slate-500'
                                            }`}
                                        >
                                            {item.name}
                                            <span>{selected && <CheckIcon width={24} height={24} />}</span>
                                        </li>
                                    );
                                }}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Listbox.Button>
            </Listbox>
        </div>
    );
}

export default ListBoxWrapper;
