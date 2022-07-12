import styled from 'styled-components'
import { Button } from '../../components/Button'
import { SkelText } from '../../components/SkelText'
import { useFollow } from '../../queries/useFollow'
import { useStats } from '../../queries/useStats'

type Props = {
  userId?: string
  imageSrc?: string
  description?: string
}

export const TopSection = ({ imageSrc, userId, description }: Props) => {
  const follow = useFollow()
  const stats = useStats(userId)
  const amIFollowing = follow.amIFollowing(userId)

  const handleFollowClick = () => {
    if (!userId) return
    follow.followUser({ userId, value: !amIFollowing })
  }

  return (
    <Container>
      <InfoSection>
        <UserImage src={imageSrc} />
        <RightPanel>
          <UserName>
            <div>
              <SkelText v={stats.data?.name} w={10} />
            </div>
            <div>
              <SkelText v={stats.data?.name && `@${stats.data?.name}`} w={10} />
            </div>
          </UserName>
          <FollowButton
            label={amIFollowing ? 'Unfollow' : 'Follow'}
            onClick={handleFollowClick}
            isLoading={follow.isLoading}
          />
        </RightPanel>
        {description && <Description>{description}</Description>}
      </InfoSection>
      <StatsSection>
        <div>
          <div>{stats.data?.post_number}</div>
          <div>posts</div>
        </div>
        <div>
          <div>{stats.data?.followers_number}</div>
          <div>followers</div>
        </div>
        <div>
          <div>{stats.data?.following_number}</div>
          <div>following</div>
        </div>
      </StatsSection>
    </Container>
  )
}

const Container = styled.div`
  margin: 10px 0 0 0;
  box-shadow: 0px 3px 10px 0px #00000030;
  border-radius: 15px;
`

const InfoSection = styled.div`
  padding: 10px;
  display: grid;
  grid-template: auto auto / auto 1fr;
`

const Description = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;
  grid-row: 2 / 3;
  grid-column: 1 / 3;
  font-size: 16px;
  color: #333a55;
`

const StatsSection = styled.div`
  padding: 10px;
  border-top: 1px solid #dfdfdf;
  display: flex;
  justify-content: space-around;
  align-items: center;
  > div {
    display: grid;
    grid-template: auto auto / auto;
    justify-items: center;

    > :first-child {
      font-weight: 700;
      font-size: 20px;
    }
    > :last-child {
      font-weight: 400;
      font-size: 14px;
      color: #333a55aa;
    }
  }
`

const UserImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`

const RightPanel = styled.div`
  margin: auto 0 auto 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

const UserName = styled.div`
  > :nth-child(1) {
    font-size: 22px;
    font-weight: 600;
  }
  > :nth-child(2) {
    font-weight: 400;
    font-size: 14px;
    color: #333a55aa;
  }
`

const FollowButton = styled(Button)`
  width: 80px;
  padding: 2px;
  font-size: 14px;
`
