import React, { useState, useEffect } from "react";
import { IconCirclePlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import CreateRecordModal from "./components/create-record-modal"; // Adjust the import path
import RecordCard from "./components/record-card"; // Adjust the import path
import { useDispatch,useSelector } from "react-redux";
import { CreateRecordThunk } from "../../Redux/action/createRecord";
import { getRecordsThunk } from "../../Redux/action/getRecords";

const Index = () => {
  const navigate = useNavigate();
  const [userRecords, setUserRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => { 
    const fetchRecords = async () => {
      try {
        await dispatch(getRecordsThunk());
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }
  , [dispatch]);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const { load ,Record,error } = useSelector((state) => state.CreateRecord);
  const createFolder = async (foldername) => {
    const data = {
      RecordName: foldername,
    };
    try {
       dispatch(CreateRecordThunk(data));
       if(Record == "Record created!!!"){
        dispatch(getRecordsThunk());
        handleCloseModal();
       }
    } catch (e) {
      console.log(e);
      handleCloseModal();
    }
  };
  const  { loads,Records,errors} = useSelector((state) => state.GetRecords); 

  const handleNavigate = (recordId) => {
    const filteredRecords = Records?.filter(
      (record) => record.RecordId === recordId,
    );
    navigate(`/medical-records/${recordId}`, {
      state: filteredRecords[0],
    });
  };

  return (
    <div className="flex flex-wrap gap-[26px]">
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-[#13131a] dark:text-white dark:hover:bg-neutral-800"
        onClick={handleOpenModal}
      >
        <IconCirclePlus />
        Create Record
      </button>

      <CreateRecordModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreate={createFolder}
      />

      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {Records?.map((record) => (
          <RecordCard
            key={record.recordName}
            record={record}
            onNavigate={handleNavigate}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
