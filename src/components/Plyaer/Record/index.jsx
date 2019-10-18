import React, { memo } from "react";
import { RecordWraper } from "./style";

const Record = (props) => {
    const { picUrl } = props;
    return <RecordWraper>
        <div className="mid">
            <img className="img" src={picUrl} alt="ok" />
        </div>
    </RecordWraper>
}
export default memo(Record);