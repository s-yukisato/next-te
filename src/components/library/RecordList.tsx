import * as React from "react";
import type { NextPage } from "next";
import axios from "axios";
import { TransitionGroup } from 'react-transition-group';
import { API_URL } from '~/config/config';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
    Memo,
    Status,
    RatingPart as Rating,
} from '~/components/form/Record';
import { ControlledSlider } from './Slider';

import Dialog from '../block/Dialog';
import Snackbar from '../block/Snackbar';

import Record from "./Record";

const initalValue = {
    memo: "",
    status: "",
    rating: 0,
    page: 0,
    pages: 0
}

const RecordList = ({ filteredRecords, setFilteredRecords }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState("");

    const [error, setError] = useState(null);

    const [targetIndex, setTargetIndex] = useState(null);
    const [actionType, setActionType] = useState(null);

    const [values, setValues] = useState(initalValue);

    const statusChange = async () => {
        await axios.put(`${API_URI}/api/v1/record/status/${filteredRecords[targetIndex]._id}`, { status: "read" })
            .then(res => res)
            .catch(err => console.error(err))
        setFilteredRecords(filteredRecords.map((item) => {
            if (item._id === filteredRecords[targetIndex]._id) {
                return { ...item, status: "read" }
            }
            return item
        }))
        setMessage("「読み終えた」に変更しました");
        setOpenSnackbar(true);
        setTargetIndex(null);
    }

    const deleteRecord = async () => {
        await axios.delete(`${API_URI}/api/v1/record/${filteredRecords[targetIndex]._id}`)
            .then(res => res)
            .catch(err => console.error(err))
        setFilteredRecords(filteredRecords.filter(el => el._id !== filteredRecords[targetIndex]._id))
        setMessage("削除しました");
        setOpenSnackbar(true);
        setTargetIndex(null);
    }

    useEffect(() => {
        // 初回にダイアログが開かないように
        if (targetIndex == null) return;
        // propの値(update, status change, delete)によって処理を分ける
        if (actionType === "update") {
            // 選択された書籍のデータをbooks配列から参照
            setValues({
                memo: filteredRecords[targetIndex].memo,
                status: filteredRecords[targetIndex].status,
                rating: filteredRecords[targetIndex].rating,
                page: filteredRecords[targetIndex].page,
                pages: filteredRecords[targetIndex].book.pages,
            })
            setOpenDialog(true);
        } else if (actionType === "delete") {
            deleteRecord();
        } else {
            statusChange();
        }
        setActionType(null);
    }, [targetIndex]);

    const closeDialog = () => {
        setOpenDialog(false);
        setTargetIndex(null);
    }

    const update = async (e) => {
        e.preventDefault();

        setError(null);
        if (error) return;

        let data;
        await axios.put(`${API_URI}/api/v1/record/${filteredRecords[targetIndex]._id}`, values)
            .then(res => data = res.data)
            .catch(err => setError(err.message))

        if (error) return setError("登録に失敗しました");

        if (!error) {
            setOpenDialog(false);
            // 変更したデータを反映
            setFilteredRecords(filteredRecords.map((item) => {
                if (item._id === filteredRecords[targetIndex]._id) {
                    return {
                        ...item,
                        memo: data.memo,
                        status: data.status,
                        rating: data.rating,
                        page: data.page
                    };
                }
                return item
            }))

            setMessage("更新しました");
            setOpenSnackbar(true);
            setTargetIndex(null);
            setValues(initalValue);
        }
    }

    // =============================  ダイアログ用　=============================
    const title = openDialog ? filteredRecords[targetIndex].book.title : "";

    const content = (
        <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}><Memo values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Status values={values} setValues={setValues} /></Grid>
                <Grid item xs={12}><Rating values={values} setValues={setValues} /></Grid>
                <Grid item xs={12} justifyContent="center">
                    <ControlledSlider values={values} setValues={setValues} />
                </Grid>
            </Grid>
            <Typography color="error" sx={{ textAlign: 'center', mt: 2 }}>{error}</Typography>
        </Box>
    )

    const action = (
        <>
            <Button onClick={closeDialog}>閉じる</Button>
            <Button type="submit" onClick={update}>変更する</Button>
        </>
    )
    // ============================================================================


    return (
        <Grid
            item
            flex="auto"
            sx={{ my: 3, width: { xs: "80vw", sm: "58vw" } }}
        >
            <TransitionGroup>
                {filteredRecords.map((record, index) => (
                    <Collapse key={record._id}>
                        <Record
                            record={record}
                            index={index}
                            setTargetIndex={setTargetIndex}
                            setActionType={setActionType} />
                    </Collapse>
                ))}
            </TransitionGroup>
            <Dialog isOpen={openDialog} close={closeDialog} title={title} content={content} action={action} />
            <Snackbar isOpen={openSnackbar} setIsOpen={setOpenSnackbar} message={message} />
        </Grid >
    )
}

export default React.memo(RecordList);