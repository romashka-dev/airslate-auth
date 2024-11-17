import { FC } from "react";

interface AuthorInfoProps {
  projectDescription: string;
  authorName: string;
}

export const AuthorInfo: FC<AuthorInfoProps> = ({ projectDescription, authorName }) => {
  return (
    <p className="author-info">
      <span className="author-info__project">{projectDescription}</span>
      <span className="author-info__performer">{authorName}</span>
    </p>
  );
} 
