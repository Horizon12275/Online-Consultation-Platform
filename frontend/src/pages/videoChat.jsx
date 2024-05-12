import { BasicLayout } from "../layouts";
import ChatApp from "../components/consult";
import VideosDisplay from "../components/videos_display";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import { getExpertById } from "../services/expertService";
import { getClientById } from "../services/clientService";
import { useParams } from "react-router-dom";

function VideoChatPage() {
  const { receiverId } = useParams();
  const { user } = useAuth();
  const [receiver, setReceiver] = useState({});
  useEffect(() => {
    if (user?.role === "user") {
      getExpertById(receiverId).then((expert) => {
        setReceiver(expert);
      });
    } else {
      // 如果当前用户是专家，则获取用户信息
      getClientById(receiverId).then((client) => {
        setReceiver(client);
      });
    }
  }, [receiverId, user]);
  return (
    <BasicLayout>
      <VideosDisplay />
      <ChatApp sid={user?.id} receiver={receiver} />
    </BasicLayout>
  );
}
export default VideoChatPage;