import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SELECTITEM } from '../../interfaces/SELECTITEM';
import { MemberMiniDTO } from '../../models/memberMiniDTO';
import { SqlResource } from '../../services/sql-resource.service';

@Component({
  selector: 'app-member-selector',
  templateUrl: './member-selector.component.html',
  styleUrls: ['./member-selector.component.css']
})
export class MemberSelectorComponent implements OnInit {
  members: Array<MemberMiniDTO>;
  errorMessage = '';
  haveData: boolean;
  haveMemberType: boolean;
  requestorRoles: SELECTITEM[];
  // @Output() onSelectedStudentName = new EventEmitter<string>();
  @Output() onSelectedRoleId = new EventEmitter<number>();
  @Output() onSelectedMemberId = new EventEmitter<number>();

  constructor(
    private sqlResource: SqlResource) {

      this.requestorRoles = [
        { value: '0', label: '[None]' },
        { value: '1008', label: 'Volunteer' },
        { value: '1009', label: 'Sponsor' },
        { value: '1010', label: 'Mentor' },
        { value: '1013', label: 'Donor' },
        { value: '1007', label: 'Board Member' },
        { value: '2068', label: 'Admin' },
        { value: '2069', label: 'Student' }
      ];

  }
  public ngOnInit() {
    this.haveData = false;
    this.haveMemberType = false;

  }

  public setSelectedRole(roleId: string) {
    console.log('selectedRole is set to ' + roleId);
    this.haveMemberType = true;
    const selectedValue = this.requestorRoles.filter(x => x.value === roleId).map(row => row.label);
    console.log('selectedValue is ' + selectedValue[0]);
    this.fetchMembers(selectedValue[0]);
    this.onSelectedRoleId.emit(+ roleId);
  }

  public fetchMembers(role: string) {
    console.log('in fetchMembers');
    this.sqlResource.getCurrentMemberMiniDTOs(role)
    .subscribe(
      data => { this.members = data; console.log(this.members); },
      err => console.error('Subscribe error: ' + err),
      () => {
        console.log('member-selector loaded ' + this.members.length + ' rows');
        if (this.members.length > 0) {
          console.log(this.members[0].memberName);
          this.haveData = true;
        } else {
          //
        }
      });
  }
  public setSelectedMember(memberId: string) {
    console.log('selected memberId is set to ' + memberId);
    this.onSelectedMemberId.emit(+ memberId);
  }
}
