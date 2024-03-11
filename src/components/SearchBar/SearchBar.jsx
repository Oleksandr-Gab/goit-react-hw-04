import { Field, Form, Formik } from "formik";
import { IoSearchSharp } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

const notify = () =>
    toast.error("This is required you dummy", {
        duration: 600,
    });

export default function SearchBar({ onSearch }) {
    return (
        <header className={css.header}>
            <Formik
                initialValues={{ search: "" }}
                validateOnBlur={false}
                onSubmit={(values, actions) => {
                    values.search === "" && notify();
                    onSearch(values.search);
                    actions.resetForm();
                }}
            >
                <Form>
                    <div className={css.inputWrap}>
                        <button className={css.button} type="submit">
                            <IoSearchSharp />
                        </button>
                        <Field
                            className={css.search}
                            name="search"
                            placeholder="Search images and photos"
                        ></Field>
                    </div>
                </Form>
            </Formik>
            <Toaster />
        </header>
    );
}
