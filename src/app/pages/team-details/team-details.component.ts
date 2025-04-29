import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// CommonModule قد لا يكون مطلوباً إذا لم نستخدم أي من توجيهاته مثل ngClass, ngStyle..
// import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

// 1. استخدام نفس الواجهة الموجودة في OurteamComponent
interface TeamMember {
  id: number;
  Title: string; // مفتاح اسم العضو للترجمة
  Text: string;  // مفتاح المسمى الوظيفي للترجمة
  imageUrl: string;
  // يمكنك إضافة حقول أخرى هنا إذا كانت متوفرة في بياناتك الحقيقية
  // bioKey?: string; // مفتاح للنبذة التعريفية (مثال)
  // email?: string;
  // phone?: string;
}

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [
    // CommonModule, // إزالته مؤقتاً
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'] // ملف الحركة يبقى كما هو
})
export class TeamDetailsComponent implements OnInit {
  memberId: number | null = null;
  member: TeamMember | undefined = undefined;
  isLoading = true;

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // 2. جلب أو تعريف بيانات الفريق هنا
  // !! تنبيه: هذا ليس أفضل ممارسة للتطبيقات الحقيقية !!
  // يجب استخدام Service مشترك لجلب/تخزين هذه البيانات.
  // سأقوم بنسخ البيانات من OurteamComponent كمثال توضيحي فقط.
  private allMembersData: TeamMember[] = [
    { id: 1,  Title: 'team.titles.1', Text: 'team.subtitle.1', imageUrl: '/images/1.jpg' /*, bioKey: 'team.bio.1', email: 'member1@email.com' */ },
    { id: 2,  Title: 'team.titles.2', Text: 'team.subtitle.2', imageUrl: '/images/2.jpg' /*, bioKey: 'team.bio.2' */ },
    { id: 3,  Title: 'team.titles.3', Text: 'team.subtitle.3', imageUrl: '/images/3.jpg' /*, bioKey: 'team.bio.3', phone: '+123' */ },
    { id: 4,  Title: 'team.titles.4', Text: 'team.subtitle.4', imageUrl: '/images/4.jpg' /*, bioKey: 'team.bio.4' */ },
    { id: 5,  Title: 'team.titles.5', Text: 'team.subtitle.5', imageUrl: '/images/5.jpg' /*, bioKey: 'team.bio.5' */ },
    { id: 6,  Title: 'team.titles.6', Text: 'team.subtitle.6', imageUrl: '/images/6.jpg' /*, bioKey: 'team.bio.6' */ },
    { id: 7,  Title: 'team.titles.7', Text: 'team.subtitle.7', imageUrl: '/images/7.jpg' /*, bioKey: 'team.bio.7' */ },
    { id: 8,  Title: 'team.titles.8', Text: 'team.subtitle.8', imageUrl: '/images/8.jpg' /*, bioKey: 'team.bio.8' */ },
    { id: 9,  Title: 'team.titles.9', Text: 'team.subtitle.9', imageUrl: '/images/9.jpg' /*, bioKey: 'team.bio.9' */ },
    { id: 10, Title: 'team.titles.10', Text: 'team.subtitle.10', imageUrl: '/images/10.jpg' /*, bioKey: 'team.bio.10' */ },
    { id: 11, Title: 'team.titles.11', Text: 'team.subtitle.11', imageUrl: '/images/11.jpg' /*, bioKey: 'team.bio.11' */ },
    { id: 12, Title: 'team.titles.12', Text: 'team.subtitle.12', imageUrl: '/images/12.jpg' /*, bioKey: 'team.bio.12' */ },
    { id: 13, Title: 'team.titles.13', Text: 'team.subtitle.13', imageUrl: '/images/13.jpg' /*, bioKey: 'team.bio.13' */ },
    { id: 14, Title: 'team.titles.14', Text: 'team.subtitle.14', imageUrl: '/images/14.jpg' /*, bioKey: 'team.bio.14' */ },
    { id: 15, Title: 'team.titles.15', Text: 'team.subtitle.15', imageUrl: '/images/15.jpg' /*, bioKey: 'team.bio.15' */ },
    { id: 16, Title: 'team.titles.16', Text: 'team.subtitle.16', imageUrl: '/images/4.jpg' /*, bioKey: 'team.bio.16' */ },
    { id: 17, Title: 'team.titles.17', Text: 'team.subtitle.17', imageUrl: '/images/17.jpg' /*, bioKey: 'team.bio.17' */ },
    { id: 18, Title: 'team.titles.18', Text: 'team.subtitle.18', imageUrl: '/images/4.jpg' /*, bioKey: 'team.bio.18' */ },
    { id: 19, Title: 'team.titles.19', Text: 'team.subtitle.19', imageUrl: '/images/19.jpg' /*, bioKey: 'team.bio.19' */ },
    { id: 20, Title: 'team.titles.20', Text: 'team.subtitle.20', imageUrl: '/images/20.jpg' /*, bioKey: 'team.bio.20' */ },
    { id: 21, Title: 'team.titles.21', Text: 'team.subtitle.21', imageUrl: '/images/21.jpg' /*, bioKey: 'team.bio.21' */ },
    { id: 22, Title: 'team.titles.22', Text: 'team.subtitle.22', imageUrl: '/images/22.jpg' /*, bioKey: 'team.bio.22' */ },
    { id: 23, Title: 'team.titles.23', Text: 'team.subtitle.23', imageUrl: '/images/4.jpg' /*, bioKey: 'team.bio.23' */ },
    { id: 24, Title: 'team.titles.24', Text: 'team.subtitle.24', imageUrl: '/images/24.jpg' /*, bioKey: 'team.bio.24' */ },
    { id: 25, Title: 'team.titles.25', Text: 'team.subtitle.25', imageUrl: '/images/25.jpg' /*, bioKey: 'team.bio.25' */ }
    // أضفت حقول النبذة والاتصال كتعليق لتوضيح أين يمكن وضعها لو كانت البيانات متوفرة
  ];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.memberId = +id; // تحويل النص إلى رقم
        this.findMemberDetails(this.memberId);
      } else {
        // إذا لم يتم العثور على ID في الرابط
        this.isLoading = false;
        console.error('Member ID not found in route parameters.');
        // يمكنك إعادة التوجيه إلى صفحة الخطأ أو القائمة الرئيسية
        // this.router.navigate(['/team']); // مثال: العودة لقائمة الفريق
      }
    });
  }

  // 3. دالة للبحث عن العضو في البيانات المحلية باستخدام الـ ID
  findMemberDetails(id: number): void {
    this.isLoading = true;
    // محاكاة بسيطة للبحث (في الواقع قد يكون استدعاء API)
    setTimeout(() => { // استخدام setTimeout لمحاكاة التأخير البسيط
      this.member = this.allMembersData.find(m => m.id === id);
      this.isLoading = false; // انتهاء التحميل سواء وجد العضو أم لا

      if (!this.member) {
        console.error(`Member with ID ${id} not found.`);
        // القالب سيعرض رسالة "لم يتم العثور" بناءً على قيمة member و isLoading
      }
    }, 300); // محاكاة تأخير 300ms
  }
}