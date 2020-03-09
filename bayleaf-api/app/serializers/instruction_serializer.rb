class InstructionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :recipe_id, :step_num, :content
  belongs_to :recipe
end
