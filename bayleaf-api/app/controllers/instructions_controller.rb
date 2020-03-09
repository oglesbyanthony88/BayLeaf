class InstructionsController < ApplicationController

private

def instruction_params
	params.require(:instruction).permit(:step_num, :content, :recipe_id)
end

end
