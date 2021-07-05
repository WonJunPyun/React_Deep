import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import {history} from "../redux/configureStore";

 const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick={() => {
                history.push(`/write/${props.id}`);
              }}>
                수정
              </Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile: "https://dszw1qtcnsa5e.cloudfront.net/community/20201027/32e29b2d-7be4-46a9-9de3-ed707d8598f5/c67537a607e37016cd65de01fb4bf437.jpg",
  },
  image_url: "https://dszw1qtcnsa5e.cloudfront.net/community/20201027/32e29b2d-7be4-46a9-9de3-ed707d8598f5/c67537a607e37016cd65de01fb4bf437.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
