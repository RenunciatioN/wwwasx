import { FC } from "react";
import { Title } from "@/components/Title";

import { questions } from "@/content/homeJson.json";
import styles from "./Questions.module.scss";
import { QuestionItem } from "./QuestionItem";

interface IQuestionsProps {
    title?: string;
}

const Questions: FC<IQuestionsProps> = ({ title }) => {
    return (
        <div className={styles.questions}>
            <Title text={title ? title : questions.title} />

            <div className={styles.list}>
                {questions.list.map((item, index) => (
                    <QuestionItem key={index} title={item.title} text={item.text} />
                ))}
            </div>
        </div>
    );
};

export { Questions };
