import $ from 'jquery';

export class ModalHandler {
    constructor(state = null, name = null) {
        this.name = name == null ? ".modal-wrapper" : name; 
        this.visible = state == null ? !$(this.name).hasClass('hide') : state;
    }
    
    SetState(state) {
        switch(state) {
            case true: 
                $(this.name).removeClass('hide');
                break;
            case false: 
                $(this.name).addClass('hide');
                break;
            default:
                this.SetState(false);
                break;
        }
    }

    Show() {
        this.SetVisibility(true);
    } 

    Hide() {
        this.SetVisibility(false);
    }

    Toggle() {
        this.SetVisibility(!this.Visible());
    }

    Visible() {
        return this.visible;
    }

    SetVisibility(State = null) {
        if(State == null) 
            return this.SetVisibility(!this.Visible());
        this.SetState(State);
        this.visible = (State);
    }

    CheckIfExists() {
        var temp = $(this.name); 
        if(temp)
            return;
        // TODO: 
    }
};