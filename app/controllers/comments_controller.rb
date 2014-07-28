class CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.save
    respond_to :js
  end

  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url }
      format.json { head :no_content }
    end
  end

  private

    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
