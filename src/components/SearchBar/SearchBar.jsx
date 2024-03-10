import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { IoSearchSharp } from "react-icons/io5";

import css from "./SearchBar.module.css";

const searchSchema = Yup.object().shape({
    search: Yup.string()
        .min(1, "Too short!")
        .max(50, "Too long")
        .required("This is required you dummy"),
});

export default function SearchBar({ onSearch }) {
    return (
        <header className={css.header}>
            <Formik
                initialValues={{ search: "" }}
                validationSchema={searchSchema}
                validateOnBlur={false}
                onSubmit={(values, actions) => {
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
                    <ErrorMessage name="search" component={"span"} />
                </Form>
            </Formik>
        </header>
    );
}
