import { all } from "redux-saga/effects";
import { AdminEffects } from '../Pages/AdminPage/State/AdminEffects';

export default function* rootEffects() {
    yield all([AdminEffects()]);
}